import { type Locator, type Page } from '@playwright/test';

export class TyposPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.content = page.locator('.example p').last();
  }
}
