import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { JavaScriptAlertsPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the JavaScript Alerts heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new JavaScriptAlertsPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

When(
  'I click the JS Alert button and accept',
  async function (this: PlaywrightWorld) {
    const page = new JavaScriptAlertsPage(this.page);
    this.page.once('dialog', (dialog) => dialog.accept());
    await page.jsAlertButton.click();
  },
);

When(
  'I click the JS Confirm button and accept',
  async function (this: PlaywrightWorld) {
    const page = new JavaScriptAlertsPage(this.page);
    this.page.once('dialog', (dialog) => dialog.accept());
    await page.jsConfirmButton.click();
  },
);

When(
  'I click the JS Confirm button and dismiss',
  async function (this: PlaywrightWorld) {
    const page = new JavaScriptAlertsPage(this.page);
    this.page.once('dialog', (dialog) => dialog.dismiss());
    await page.jsConfirmButton.click();
  },
);

When(
  'I click the JS Prompt button and enter {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new JavaScriptAlertsPage(this.page);
    this.page.once('dialog', (dialog) => dialog.accept(text));
    await page.jsPromptButton.click();
  },
);

Then(
  'the result should show {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new JavaScriptAlertsPage(this.page);
    await expect(page.resultText).toContainText(text, { timeout: 10000 });
  },
);
