import { type Locator, type Page } from '@playwright/test';

export class LargeDeepDomPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly noSiblingsSection: Locator;
  readonly siblingsSection: Locator;
  readonly table: Locator;
  readonly tableRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.noSiblingsSection = page.locator('#no-hierarchical-elements');
    this.siblingsSection = page.locator('#sibling-elements');
    this.table = page.locator('#large-table');
    this.tableRows = page.locator('#large-table tbody tr');
  }
}
