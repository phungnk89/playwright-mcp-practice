import { type Locator, type Page } from '@playwright/test';

export class ABTestPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly description: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('.example h3');
    this.description = page.locator('.example p');
  }
}
