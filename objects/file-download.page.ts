import { type Locator, type Page } from '@playwright/test';

export class FileDownloadPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly downloadLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.downloadLinks = page.locator('.example a');
  }
}
