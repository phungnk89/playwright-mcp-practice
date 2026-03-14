import { type Locator, type Page } from '@playwright/test';

export class ContextMenuPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly hotSpot: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.hotSpot = page.locator('#hot-spot');
  }

  async rightClickHotSpot() {
    await this.hotSpot.click({ button: 'right' });
  }
}
