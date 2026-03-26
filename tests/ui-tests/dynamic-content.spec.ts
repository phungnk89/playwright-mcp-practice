import { expect, test } from '@playwright/test';
import { DynamicContentPage, HerokuHomePage } from '@objects';

test.describe('Dynamic Content', () => {
  let homePage: HerokuHomePage;
  let dynamicContentPage: DynamicContentPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Dynamic Content');
    dynamicContentPage = new DynamicContentPage(page);
  });

  test('Navigate to Dynamic Content page', async ({ page }) => {
    await expect(page).toHaveURL(/\/dynamic_content/);
    await expect(dynamicContentPage.heading).toBeVisible({ timeout: 10000 });
    await expect(dynamicContentPage.images).toHaveCount(3);
  });
});
