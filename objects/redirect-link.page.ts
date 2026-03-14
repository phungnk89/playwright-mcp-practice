import { type Locator, type Page } from '@playwright/test';

export class RedirectLinkPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly redirectLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.redirectLink = page.locator('#redirect');
  }

  async clickRedirect() {
    await this.redirectLink.click();
  }
}
