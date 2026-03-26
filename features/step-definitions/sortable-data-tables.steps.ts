import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SortableDataTablesPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Sortable Data Tables heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new SortableDataTablesPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then('table 1 should be visible', async function (this: PlaywrightWorld) {
  const page = new SortableDataTablesPage(this.page);
  await expect(page.table1).toBeVisible({ timeout: 10000 });
});

Then('table 2 should be visible', async function (this: PlaywrightWorld) {
  const page = new SortableDataTablesPage(this.page);
  await expect(page.table2).toBeVisible({ timeout: 10000 });
});

Then(
  'table 1 should have {int} rows',
  async function (this: PlaywrightWorld, count: number) {
    const page = new SortableDataTablesPage(this.page);
    await expect(page.table1Rows).toHaveCount(count);
  },
);

When(
  'I click the {string} header in table 1',
  async function (this: PlaywrightWorld, columnName: string) {
    const page = new SortableDataTablesPage(this.page);
    await page.clickTable1Header(columnName);
  },
);

Then(
  'the first column of table 1 should be sorted alphabetically',
  async function (this: PlaywrightWorld) {
    const page = new SortableDataTablesPage(this.page);
    // Wait for sort animation to finish
    await this.page.waitForTimeout(1000);
    const values = await page.getTable1ColumnValues(0);
    const sorted = [...values].sort((a, b) => a.localeCompare(b));
    expect(values).toEqual(sorted);
  },
);
