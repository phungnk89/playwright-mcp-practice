import { type Locator, type Page } from '@playwright/test';

export class InfiniteScrollPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly scrollParagraphs: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.scrollParagraphs = page.locator('.jscroll-added');
  }

  async scrollDown() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight),
    );
  }
}
