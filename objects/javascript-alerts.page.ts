import { type Locator, type Page } from '@playwright/test';

export class JavaScriptAlertsPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly jsAlertButton: Locator;
  readonly jsConfirmButton: Locator;
  readonly jsPromptButton: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.jsAlertButton = page.getByRole('button', {
      name: 'Click for JS Alert',
    });
    this.jsConfirmButton = page.getByRole('button', {
      name: 'Click for JS Confirm',
    });
    this.jsPromptButton = page.getByRole('button', {
      name: 'Click for JS Prompt',
    });
    this.resultText = page.locator('#result');
  }
}
