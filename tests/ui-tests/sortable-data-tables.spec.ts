import { expect, test } from '@playwright/test';
import { HerokuHomePage, SortableDataTablesPage } from '@objects';

test.describe('Sortable Data Tables', () => {
  let homePage: HerokuHomePage;
  let tablesPage: SortableDataTablesPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Sortable Data Tables');
    tablesPage = new SortableDataTablesPage(page);
  });

  test('Navigate to Sortable Data Tables page', async ({ page }) => {
    await expect(page).toHaveURL(/\/tables/);
    await expect(tablesPage.heading).toBeVisible({ timeout: 10000 });
    await expect(tablesPage.table1).toBeVisible({ timeout: 10000 });
    await expect(tablesPage.table2).toBeVisible({ timeout: 10000 });
  });

  test('Verify table 1 has 4 data rows', async () => {
    await expect(tablesPage.table1Rows).toHaveCount(4);
  });

  test('Sort table 1 by Last Name', async ({ page }) => {
    await tablesPage.clickTable1Header('Last Name');
    await page.waitForTimeout(1000);
    const values = await tablesPage.getTable1ColumnValues(0);
    const sorted = [...values].sort((a, b) => a.localeCompare(b));
    expect(values).toEqual(sorted);
  });
});
