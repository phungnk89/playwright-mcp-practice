import { expect, test } from '@playwright/test';
import { HerokuHomePage, LargeDeepDomPage } from '@objects';

test.describe('Large & Deep DOM', () => {
  let homePage: HerokuHomePage;
  let largeDeepDomPage: LargeDeepDomPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Large & Deep DOM');
    largeDeepDomPage = new LargeDeepDomPage(page);
  });

  test('Navigate to Large & Deep DOM page', async ({ page }) => {
    await expect(page).toHaveURL(/\/large/);
    await expect(largeDeepDomPage.heading).toBeVisible({ timeout: 10000 });
    await expect(largeDeepDomPage.table).toBeVisible({ timeout: 10000 });
    await expect(largeDeepDomPage.tableRows).toHaveCount(50);
  });
});
