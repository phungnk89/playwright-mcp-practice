import { type Locator, type Page } from '@playwright/test';

export class SlowResourcesPage {
  private readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
  }
}
