import { expect, test } from '@playwright/test';
import { HerokuHomePage, SlowResourcesPage } from '@objects';

test.describe('Slow Resources', () => {
  let homePage: HerokuHomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Slow Resources');
  });

  test('Navigate to Slow Resources page', async ({ page }) => {
    await expect(page).toHaveURL(/\/slow/);
    const slowResourcesPage = new SlowResourcesPage(page);
    await expect(slowResourcesPage.heading).toBeVisible({ timeout: 10000 });
  });
});
