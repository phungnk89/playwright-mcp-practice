import { type Locator, type Page } from '@playwright/test';

export class DisappearingElementsPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly navLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.navLinks = page.locator('.example li a');
  }

  async getNavTexts(): Promise<string[]> {
    return this.navLinks.allTextContents();
  }
}
