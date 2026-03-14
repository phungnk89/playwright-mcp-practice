import { type Locator, type Page } from '@playwright/test';

export class InputsPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly numberInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.numberInput = page.locator('input[type="number"]');
  }

  async enterNumber(value: string) {
    await this.numberInput.fill(value);
  }
}
