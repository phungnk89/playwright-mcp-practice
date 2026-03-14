import { type Locator, type Page } from '@playwright/test';

export class ShiftingContentPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly menuLink: Locator;
  readonly imageLink: Locator;
  readonly listLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.menuLink = page.getByRole('link', { name: 'Example 1: Menu Element' });
    this.imageLink = page.getByRole('link', { name: 'Example 2: An image' });
    this.listLink = page.getByRole('link', { name: 'Example 3: List' });
  }
}
