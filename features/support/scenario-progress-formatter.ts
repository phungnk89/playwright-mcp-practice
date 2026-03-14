import { Formatter, IFormatterOptions } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';

export default class ScenarioProgressFormatter extends Formatter {
  private totalScenarios = 0;
  private completedScenarios = 0;
  private passedScenarios = 0;
  private failedScenarios = 0;
  private failedDetails: { name: string; error: string }[] = [];
  private isTTY = process.stderr.isTTY ?? false;
  private activeScenarios: Set<string> = new Set();
  private progressInitialized = false;
  private renderedLines = 0;
  private pickleNames: Map<string, string> = new Map();
  private testCaseToPickle: Map<string, string> = new Map();
  private startedToTestCase: Map<string, string> = new Map();

  constructor(options: IFormatterOptions) {
    super(options);

    options.eventBroadcaster.on('envelope', (envelope: messages.Envelope) => {
      if (envelope.pickle) {
        this.totalScenarios++;
        this.pickleNames.set(envelope.pickle.id!, envelope.pickle.name!);
      }

      if (envelope.testCase) {
        this.testCaseToPickle.set(
          envelope.testCase.id!,
          envelope.testCase.pickleId!,
        );
      }

      if (envelope.testCaseStarted) {
        this.startedToTestCase.set(
          envelope.testCaseStarted.id!,
          envelope.testCaseStarted.testCaseId!,
        );
        const name = this.getScenarioName(envelope.testCaseStarted.testCaseId!);
        this.activeScenarios.add(name);
        this.renderProgress();
      }

      if (envelope.testStepFinished) {
        const status = envelope.testStepFinished.testStepResult?.status;
        if (status === messages.TestStepResultStatus.FAILED) {
          const startedId = envelope.testStepFinished.testCaseStartedId!;
          const testCaseId = this.startedToTestCase.get(startedId);
          const name = testCaseId
            ? this.getScenarioName(testCaseId)
            : 'Unknown';
          const errorMessage =
            envelope.testStepFinished.testStepResult?.message ||
            'Unknown error';
          this.failedDetails.push({ name, error: errorMessage });
        }
      }

      if (envelope.testCaseFinished) {
        this.completedScenarios++;
        const startedId = envelope.testCaseFinished.testCaseStartedId!;
        const testCaseId = this.startedToTestCase.get(startedId);
        const name = testCaseId ? this.getScenarioName(testCaseId) : 'Unknown';
        this.activeScenarios.delete(name);

        if (this.failedDetails.some((f) => f.name === name)) {
          this.failedScenarios++;
        } else {
          this.passedScenarios++;
        }

        this.renderProgress();
      }

      if (envelope.testRunFinished) {
        this.clearProgress();
        this.printResults();
        this.printSummary();
      }
    });
  }

  private getScenarioName(testCaseId: string): string {
    const pickleId = this.testCaseToPickle.get(testCaseId);
    if (pickleId) {
      return this.pickleNames.get(pickleId) || 'Unknown Scenario';
    }
    return 'Unknown Scenario';
  }

  private renderProgress() {
    const total = this.totalScenarios;
    const completed = this.completedScenarios;
    const barWidth = 40;
    const filled = Math.round((completed / total) * barWidth);
    const empty = barWidth - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    const percent = Math.round((completed / total) * 100);
    const activeList = Array.from(this.activeScenarios);
    const totalLines = 1 + activeList.length; // 1 progress bar + N active scenarios

    if (this.isTTY) {
      if (this.progressInitialized) {
        // Move up to clear previous render
        process.stderr.write(`\x1B[${this.renderedLines}A`);
      }
      // Progress bar line
      process.stderr.write(
        `\x1B[2K  [${bar}] ${percent}% (${completed}/${total} scenarios)\n`,
      );
      // Active scenario lines
      for (const name of activeList) {
        process.stderr.write(`\x1B[2K  ▶ ${name}\n`);
      }
      this.renderedLines = totalLines;
      this.progressInitialized = true;
    } else {
      const scenarioNames = activeList.join(', ');
      this.log(
        `  [${bar}] ${percent}% (${completed}/${total} scenarios) ▶ ${scenarioNames}\n`,
      );
    }
  }

  private clearProgress() {
    if (this.isTTY && this.renderedLines > 0) {
      process.stderr.write(`\x1B[${this.renderedLines}A`);
      for (let i = 0; i < this.renderedLines; i++) {
        process.stderr.write('\x1B[2K\n');
      }
      process.stderr.write(`\x1B[${this.renderedLines}A`);
    }
  }

  private printResults() {
    for (const [, testCaseId] of this.startedToTestCase.entries()) {
      const name = this.getScenarioName(testCaseId);
      const hasFailed = this.failedDetails.some((f) => f.name === name);
      if (hasFailed) {
        this.log(`  ✖ ${name} (FAILED)\n`);
      } else {
        this.log(`  ✔ ${name}\n`);
      }
    }
    this.log('\n');
    const bar = '█'.repeat(40);
    this.log(
      `  [${bar}] 100% (${this.completedScenarios}/${this.totalScenarios} scenarios)\n\n`,
    );
  }

  private printSummary() {
    this.log('─'.repeat(60) + '\n');
    this.log(
      `  ${this.completedScenarios} scenarios (${this.passedScenarios} passed`,
    );
    if (this.failedScenarios > 0) {
      this.log(`, ${this.failedScenarios} failed`);
    }
    this.log(')\n');

    if (this.failedDetails.length > 0) {
      this.log('\n  Failed scenarios:\n');
      for (const detail of this.failedDetails) {
        this.log(`    ✖ ${detail.name}\n`);
        this.log(`      ${detail.error.split('\n')[0]}\n`);
      }
    }

    this.log('─'.repeat(60) + '\n');
  }
}
