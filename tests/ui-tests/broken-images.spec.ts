import { expect, test } from '@playwright/test';
import { BrokenImagesPage, HerokuHomePage } from '@objects';

test.describe('Broken Images', () => {
  let homePage: HerokuHomePage;
  let brokenImagesPage: BrokenImagesPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Broken Images');
    brokenImagesPage = new BrokenImagesPage(page);
  });

  test('Navigate to Broken Images page', async ({ page }) => {
    await expect(page).toHaveURL(/\/broken_images/);
    await expect(brokenImagesPage.heading).toBeVisible({ timeout: 10000 });
    await expect(brokenImagesPage.images).toHaveCount(3);
  });

  test('Detect broken images', async () => {
    const isBroken0 = await brokenImagesPage.isImageBroken(0);
    expect(isBroken0).toBe(true);
    const isBroken1 = await brokenImagesPage.isImageBroken(1);
    expect(isBroken1).toBe(true);
  });

  test('Detect valid image', async () => {
    const isBroken2 = await brokenImagesPage.isImageBroken(2);
    expect(isBroken2).toBe(false);
  });
});
