import { expect, test } from '@playwright/test';
import { ExitIntentPage, HerokuHomePage } from '@objects';

test.describe('Exit Intent', () => {
  let homePage: HerokuHomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Exit Intent');
  });

  test('Navigate to Exit Intent page', async ({ page }) => {
    await expect(page).toHaveURL(/\/exit_intent/);
    const exitIntentPage = new ExitIntentPage(page);
    await expect(exitIntentPage.heading).toBeVisible({ timeout: 10000 });
  });
});
