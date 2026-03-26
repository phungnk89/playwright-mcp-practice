import { expect, test } from '@playwright/test';
import { HerokuHomePage, StatusCodesPage } from '@objects';

test.describe('Status Codes', () => {
  let homePage: HerokuHomePage;
  let statusCodesPage: StatusCodesPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Status Codes');
    statusCodesPage = new StatusCodesPage(page);
  });

  test('Navigate to Status Codes page', async ({ page }) => {
    await expect(page).toHaveURL(/\/status_codes/);
    await expect(statusCodesPage.heading).toBeVisible({ timeout: 10000 });
  });

  test('Navigate to 200 status code', async ({ page }) => {
    await statusCodesPage.clickStatusCode('200');
    await expect(page).toHaveURL(/\/status_codes\/200/);
  });

  test('Navigate to 404 status code', async ({ page }) => {
    await statusCodesPage.clickStatusCode('404');
    await expect(page).toHaveURL(/\/status_codes\/404/);
  });
});
