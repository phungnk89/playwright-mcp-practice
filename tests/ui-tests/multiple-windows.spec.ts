import { expect, test } from '@playwright/test';
import { HerokuHomePage, MultipleWindowsPage } from '@objects';

test.describe('Multiple Windows', () => {
  let homePage: HerokuHomePage;
  let multipleWindowsPage: MultipleWindowsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Multiple Windows');
    multipleWindowsPage = new MultipleWindowsPage(page);
  });

  test('Navigate to Multiple Windows page', async ({ page }) => {
    await expect(page).toHaveURL(/\/windows/);
    await expect(multipleWindowsPage.heading).toBeVisible({ timeout: 10000 });
    await expect(multipleWindowsPage.clickHereLink).toBeVisible({
      timeout: 10000,
    });
  });

  test('Open a new window', async ({ context }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      multipleWindowsPage.clickHereLink.click(),
    ]);
    await newPage.waitForLoadState();
    await expect(newPage.locator('h3')).toHaveText('New Window');
  });
});
