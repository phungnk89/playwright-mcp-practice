import { type Locator, type Page } from '@playwright/test';

export class SortableDataTablesPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly table1: Locator;
  readonly table2: Locator;
  readonly table1Rows: Locator;
  readonly table2Rows: Locator;
  readonly table1Headers: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.table1 = page.locator('#table1');
    this.table2 = page.locator('#table2');
    this.table1Rows = page.locator('#table1 tbody tr');
    this.table2Rows = page.locator('#table2 tbody tr');
    this.table1Headers = page.locator('#table1 thead th span');
  }

  async clickTable1Header(columnName: string) {
    await this.table1Headers.filter({ hasText: columnName }).click();
  }

  async getTable1ColumnValues(columnIndex: number): Promise<string[]> {
    const rows = await this.table1Rows.all();
    const values: string[] = [];
    for (const row of rows) {
      values.push(await row.locator('td').nth(columnIndex).innerText());
    }
    return values;
  }
}
