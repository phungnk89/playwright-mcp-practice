import { expect, test } from '@playwright/test';
import { FramesPage, HerokuHomePage } from '@objects';

test.describe('Frames', () => {
  let homePage: HerokuHomePage;
  let framesPage: FramesPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Frames');
    framesPage = new FramesPage(page);
  });

  test('Navigate to Frames page', async ({ page }) => {
    await expect(page).toHaveURL(/\/frames/);
    await expect(framesPage.heading).toBeVisible({ timeout: 10000 });
    await expect(framesPage.nestedFramesLink).toBeVisible({ timeout: 10000 });
    await expect(framesPage.iframeLink).toBeVisible({ timeout: 10000 });
  });
});
