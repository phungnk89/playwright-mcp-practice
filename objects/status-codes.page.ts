import { type Locator, type Page } from '@playwright/test';

export class StatusCodesPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly codeLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.codeLinks = page.locator('.example a');
  }

  async clickStatusCode(code: string) {
    await this.codeLinks.filter({ hasText: code }).click();
  }
}
