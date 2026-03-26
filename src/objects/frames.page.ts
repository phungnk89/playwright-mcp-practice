import { type Locator, type Page } from '@playwright/test';

export class FramesPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly nestedFramesLink: Locator;
  readonly iframeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.nestedFramesLink = page.getByRole('link', { name: 'Nested Frames' });
    this.iframeLink = page.getByRole('link', { name: 'iFrame' });
  }
}
