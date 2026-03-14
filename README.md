# Playwright MCP - Cucumber BDD Test Automation

End-to-end test automation framework using **Playwright** + **Cucumber.js (BDD)** + **TypeScript**, with **Playwright MCP** for AI-assisted test creation.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Setting Up Playwright MCP](#setting-up-playwright-mcp)
- [Using MCP to Create Tests](#using-mcp-to-create-tests)

---

## Prerequisites

- **Node.js** >= 18 (recommended: latest LTS)
- **npm** (comes with Node.js)
- **VS Code** with [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) extension

Verify your installation:

```bash
node --version
npm --version
```

---

## Project Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd playwright-mcp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

This downloads Chromium, Firefox, and WebKit browsers used by Playwright.

### 4. Verify setup

```bash
npm run test
```

You should see a progress bar and scenario results in the terminal.

---

## Project Structure

```
playwright-mcp/
├── cucumber.js                  # Cucumber configuration (format, parallel, paths)
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
│
├── features/                    # Test layer
│   ├── *.feature                # Gherkin feature files (test scenarios)
│   ├── step-definitions/        # Step definitions (glue code)
│   │   ├── common.steps.ts      # Shared steps (navigation, URL checks)
│   │   └── *.steps.ts           # Feature-specific steps
│   └── support/                 # Framework support files
│       ├── world.ts             # PlaywrightWorld (browser lifecycle)
│       ├── hooks.ts             # Before/After hooks
│       └── scenario-progress-formatter.ts  # Custom progress formatter
│
├── objects/                     # Page Object layer
│   ├── index.ts                 # Barrel export for all page objects
│   ├── heroku-home.page.ts      # Home page object
│   └── *.page.ts                # Feature-specific page objects
│
└── cucumber-report.html         # Generated HTML test report
```

### Layer Breakdown

| Layer                | Directory                              | Purpose                                                                          |
| -------------------- | -------------------------------------- | -------------------------------------------------------------------------------- |
| **Feature files**    | `features/*.feature`                   | Written in Gherkin syntax — describes **what** to test in plain English          |
| **Step definitions** | `features/step-definitions/*.steps.ts` | Maps Gherkin steps to Playwright actions — the **glue** between feature and code |
| **Page objects**     | `objects/*.page.ts`                    | Encapsulates page selectors and actions — keeps tests **maintainable**           |
| **Support**          | `features/support/`                    | Framework setup: browser lifecycle, hooks, formatters                            |

---

## How It Works

The test flow follows the **BDD (Behavior-Driven Development)** pattern:

```
Feature File (.feature)
    ↓  Gherkin steps are matched to...
Step Definitions (.steps.ts)
    ↓  Step definitions use...
Page Objects (.page.ts)
    ↓  Page objects interact with...
Browser (Playwright)
```

### 1. Feature File (Gherkin)

Describes test scenarios in human-readable language:

```gherkin
Feature: Checkboxes
  As a user
  I want to interact with checkboxes
  So that I can verify checkbox toggling behavior

  Background:
    Given I am on the Heroku home page
    And I click on the "Checkboxes" example

  Scenario: Toggle checkbox 1
    When I toggle checkbox 0
    Then checkbox 0 should be checked
```

### 2. Step Definition

Maps each Gherkin step to TypeScript/Playwright code:

```typescript
// features/step-definitions/checkboxes.steps.ts
import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CheckboxesPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

When(
  'I toggle checkbox {int}',
  async function (this: PlaywrightWorld, index: number) {
    const page = new CheckboxesPage(this.page);
    await page.toggleCheckbox(index);
  },
);

Then(
  'checkbox {int} should be checked',
  async function (this: PlaywrightWorld, index: number) {
    const page = new CheckboxesPage(this.page);
    await expect(page.checkboxes.nth(index)).toBeChecked();
  },
);
```

### 3. Page Object

Encapsulates selectors and actions for a page:

```typescript
// objects/checkboxes.page.ts
import { type Locator, type Page } from '@playwright/test';

export class CheckboxesPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly checkboxes: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.checkboxes = page.locator('#checkboxes input[type="checkbox"]');
  }

  async toggleCheckbox(index: number) {
    await this.checkboxes.nth(index).click();
  }
}
```

### 4. World & Hooks

- **World** (`features/support/world.ts`) — Manages the browser/page lifecycle. Each scenario gets a fresh browser instance.
- **Hooks** (`features/support/hooks.ts`) — `Before` hook launches the browser, `After` hook closes it.

---

## Writing Tests

### Step 1: Create a Feature File

Create `features/my-feature.feature`:

```gherkin
Feature: My Feature
  As a user
  I want to test something
  So that I can verify it works

  Background:
    Given I am on the Heroku home page
    And I click on the "Some Link" example

  Scenario: Verify page loads
    Then the URL should match "/some-page"
```

### Step 2: Create a Page Object

Create `objects/my-feature.page.ts`:

```typescript
import { type Locator, type Page } from '@playwright/test';

export class MyFeaturePage {
  private readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
  }
}
```

Export it from `objects/index.ts`:

```typescript
export { MyFeaturePage } from './my-feature.page';
```

### Step 3: Create Step Definitions

Create `features/step-definitions/my-feature.steps.ts`:

```typescript
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { MyFeaturePage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the My Feature heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new MyFeaturePage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);
```

### Step 4: Run the Test

```bash
npm run test
```

---

## Running Tests

### Run all tests

```bash
npm run test
```

### Run a specific feature

```bash
npx cucumber-js features/checkboxes.feature
```

### Run scenarios by name

```bash
npx cucumber-js --name "Toggle checkbox"
```

### Run scenarios by tag

```bash
npx cucumber-js --tags "@smoke"
```

### Run with a specific profile

```bash
npx cucumber-js --profile smoke
```

---

## Setting Up Playwright MCP

**Playwright MCP (Model Context Protocol)** lets AI tools (like GitHub Copilot) control a real browser to inspect pages, capture snapshots, and generate tests automatically.

### 1. Configure MCP in VS Code

The project uses the official `@playwright/mcp` package. No separate installation is needed — it runs via `npx`.

**Option A: Workspace settings** (this project only — recommended)

Create or edit `.vscode/mcp.json`:

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

**Option B: User settings** (applies to all projects)

Open VS Code `Settings (JSON)` and add:

```json
{
  "mcp": {
    "servers": {
      "playwright": {
        "command": "npx",
        "args": ["@playwright/mcp@latest"]
      }
    }
  }
}
```

### 2. Verify MCP is running

1. Open VS Code
2. Open GitHub Copilot Chat (Agent mode)
3. You should see Playwright MCP tools available (browser_navigate, browser_snapshot, browser_click, etc.)

---

## Using MCP to Create Tests

Playwright MCP allows you to ask GitHub Copilot to interact with a real browser and generate tests based on what it sees.

### Example Workflow

#### 1. Ask Copilot to explore a page

In Copilot Chat (Agent mode), type:

```
Navigate to https://the-internet.herokuapp.com/checkboxes
and take a snapshot of the page
```

Copilot will launch a browser, navigate to the page, and capture a snapshot of all elements.

#### 2. Ask Copilot to generate a test

```
Based on the page snapshot, create a Cucumber feature file,
step definitions, and page object for testing the checkboxes
on this page. Follow the existing project structure.
```

Copilot will:

- Inspect the page elements from the snapshot
- Generate a `.feature` file with Gherkin scenarios
- Generate a `.page.ts` page object with selectors
- Generate a `.steps.ts` step definition with Playwright actions

#### 3. Ask Copilot to interact and verify

```
Click the first checkbox and verify it becomes checked.
Then create a test for this interaction.
```

Copilot will physically click the checkbox in the browser, observe the result, and write accurate test code based on real behavior.

### Available MCP Actions

| Action                  | What it does                                  |
| ----------------------- | --------------------------------------------- |
| `browser_navigate`      | Navigate to a URL                             |
| `browser_snapshot`      | Capture an accessibility snapshot of the page |
| `browser_click`         | Click an element on the page                  |
| `browser_type`          | Type text into an input field                 |
| `browser_select_option` | Select dropdown options                       |
| `browser_hover`         | Hover over an element                         |
| `browser_screenshot`    | Take a screenshot                             |
| `browser_console`       | Read browser console logs                     |
| `browser_wait`          | Wait for page changes                         |

### Tips for Using MCP Effectively

1. **Start by navigating** — Always navigate to the target page first so Copilot can see the elements.
2. **Take snapshots** — Snapshots give Copilot the page structure to write accurate selectors.
3. **Be specific** — Tell Copilot to follow your project patterns (page objects, step definitions, feature files).
4. **Iterate** — Ask Copilot to interact with elements, then verify the behavior before writing the test.
5. **Review generated code** — Always review AI-generated selectors and assertions for accuracy.

---

## Configuration Reference

### cucumber.js

```javascript
module.exports = {
  default: {
    requireModule: ['ts-node/register'], // Enable TypeScript
    require: [
      'features/support/**/*.ts', // Load hooks & world
      'features/step-definitions/**/*.ts', // Load step definitions
    ],
    paths: ['features/**/*.feature'], // Feature file locations
    format: [
      './features/support/scenario-progress-formatter.ts', // Custom formatter
      'html:cucumber-report.html', // HTML report output
    ],
    parallel: 5, // Number of parallel workers
  },
};
```

### Key Tags

Use tags to categorize and filter tests:

```gherkin
@smoke
Scenario: Critical login test
  ...

@regression
Scenario: Full form validation
  ...
```

Run filtered:

```bash
npx cucumber-js --tags "@smoke"
npx cucumber-js --tags "not @slow"
npx cucumber-js --tags "@smoke and @login"
```
