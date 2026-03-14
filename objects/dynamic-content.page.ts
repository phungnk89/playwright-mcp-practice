import { type Locator, type Page } from '@playwright/test';

export class DynamicContentPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly contentRows: Locator;
  readonly images: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.contentRows = page.locator('#content .row');
    this.images = page.locator('#content .row img');
  }

  async getContentTexts(): Promise<string[]> {
    return this.contentRows.locator('.large-10').allTextContents();
  }
}
