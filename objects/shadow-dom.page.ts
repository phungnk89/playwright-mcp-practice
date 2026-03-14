import { type Locator, type Page } from '@playwright/test';

export class ShadowDomPage {
  private readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
  }

  async getShadowContent(): Promise<string> {
    return this.page.locator('my-paragraph').first().innerText();
  }
}
