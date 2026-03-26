import { expect, test } from '@playwright/test';
import { HerokuHomePage, RedirectLinkPage } from '@objects';

test.describe('Redirect Link', () => {
  let homePage: HerokuHomePage;
  let redirectLinkPage: RedirectLinkPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Redirect Link');
    redirectLinkPage = new RedirectLinkPage(page);
  });

  test('Navigate to Redirect Link page', async ({ page }) => {
    await expect(page).toHaveURL(/\/redirector/);
    await expect(redirectLinkPage.heading).toBeVisible({ timeout: 10000 });
  });

  test('Click redirect link', async ({ page }) => {
    await redirectLinkPage.clickRedirect();
    await expect(page).toHaveURL(/\/status_codes/);
  });
});
