import { type Locator, type Page } from '@playwright/test';

export class ChallengingDomPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly buttons: Locator;
  readonly table: Locator;
  readonly tableRows: Locator;
  readonly canvas: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.buttons = page.locator('.large-2.columns .button');
    this.table = page.locator('table');
    this.tableRows = page.locator('table tbody tr');
    this.canvas = page.locator('#canvas');
  }

  async clickButton(index: number) {
    await this.buttons.nth(index).click();
  }

  async getButtonTexts(): Promise<string[]> {
    return this.buttons.allTextContents();
  }
}
