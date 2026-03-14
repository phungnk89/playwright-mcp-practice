import { type Locator, type Page } from '@playwright/test';

export class DynamicControlsPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly checkbox: Locator;
  readonly removeAddButton: Locator;
  readonly input: Locator;
  readonly enableDisableButton: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h4').first();
    this.checkbox = page.locator('#checkbox-example input[type="checkbox"]');
    this.removeAddButton = page.locator('#checkbox-example button');
    this.input = page.locator('#input-example input[type="text"]');
    this.enableDisableButton = page.locator('#input-example button');
    this.message = page.locator('#message');
  }

  async clickRemoveAddButton() {
    await this.removeAddButton.click();
  }

  async clickEnableDisableButton() {
    await this.enableDisableButton.click();
  }
}
