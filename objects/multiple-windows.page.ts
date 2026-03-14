import { type Locator, type Page } from '@playwright/test';

export class MultipleWindowsPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly clickHereLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.clickHereLink = page.getByRole('link', { name: 'Click Here' });
  }
}
