import { type Locator, type Page } from '@playwright/test';

export class BasicAuthPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.message = page.locator('.example p');
  }
}
