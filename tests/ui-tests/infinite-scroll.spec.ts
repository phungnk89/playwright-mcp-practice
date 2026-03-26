import { expect, test } from '@playwright/test';
import { HerokuHomePage, InfiniteScrollPage } from '@objects';

test.describe('Infinite Scroll', () => {
  let homePage: HerokuHomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Infinite Scroll');
  });

  test('Navigate to Infinite Scroll page', async ({ page }) => {
    await expect(page).toHaveURL(/\/infinite_scroll/);
    const infiniteScrollPage = new InfiniteScrollPage(page);
    await expect(infiniteScrollPage.heading).toBeVisible({ timeout: 10000 });
  });
});
