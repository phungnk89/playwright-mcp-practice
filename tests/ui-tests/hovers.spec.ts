import { expect, test } from '@playwright/test';
import { HerokuHomePage, HoversPage } from '@objects';

test.describe('Hovers', () => {
  let homePage: HerokuHomePage;
  let hoversPage: HoversPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Hovers');
    hoversPage = new HoversPage(page);
  });

  test('Navigate to Hovers page', async ({ page }) => {
    await expect(page).toHaveURL(/\/hovers/);
    await expect(hoversPage.heading).toBeVisible({ timeout: 10000 });
    await expect(hoversPage.figureImages).toHaveCount(3);
  });

  test('Hover over first image shows caption', async () => {
    await hoversPage.hoverOverFigure(0);
    await expect(hoversPage.getCaptionAt(0)).toBeVisible({ timeout: 10000 });
    await expect(hoversPage.getCaptionAt(0)).toContainText('user1');
  });

  test('Hover over second image shows caption', async () => {
    await hoversPage.hoverOverFigure(1);
    await expect(hoversPage.getCaptionAt(1)).toBeVisible({ timeout: 10000 });
    await expect(hoversPage.getCaptionAt(1)).toContainText('user2');
  });
});
