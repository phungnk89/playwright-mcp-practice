import { expect, test } from '@playwright/test';
import { DynamicLoadingPage, HerokuHomePage } from '@objects';

test.describe('Dynamic Loading', () => {
  let homePage: HerokuHomePage;
  let dynamicLoadingPage: DynamicLoadingPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Dynamic Loading');
    dynamicLoadingPage = new DynamicLoadingPage(page);
  });

  test('Navigate to Dynamic Loading page', async ({ page }) => {
    await expect(page).toHaveURL(/\/dynamic_loading/);
    await expect(dynamicLoadingPage.heading).toBeVisible({ timeout: 10000 });
  });

  test('Load hidden element (Example 1)', async () => {
    await dynamicLoadingPage.example1Link.click();
    await dynamicLoadingPage.clickStart();
    await expect(dynamicLoadingPage.finishText).toHaveText('Hello World!', {
      timeout: 30000,
    });
  });
});
