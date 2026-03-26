import { expect, test } from '@playwright/test';
import { HerokuHomePage, ShiftingContentPage } from '@objects';

test.describe('Shifting Content', () => {
  let homePage: HerokuHomePage;
  let shiftingContentPage: ShiftingContentPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Shifting Content');
    shiftingContentPage = new ShiftingContentPage(page);
  });

  test('Navigate to Shifting Content page', async ({ page }) => {
    await expect(page).toHaveURL(/\/shifting_content/);
    await expect(shiftingContentPage.heading).toBeVisible({ timeout: 10000 });
    await expect(shiftingContentPage.menuLink).toBeVisible({ timeout: 10000 });
    await expect(shiftingContentPage.imageLink).toBeVisible({ timeout: 10000 });
    await expect(shiftingContentPage.listLink).toBeVisible({ timeout: 10000 });
  });
});
