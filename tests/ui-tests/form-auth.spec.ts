import { expect, test } from '@playwright/test';
import { FormAuthPage, HerokuHomePage } from '@objects';

test.describe('Form Authentication', () => {
  let homePage: HerokuHomePage;
  let formAuthPage: FormAuthPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Form Authentication');
    formAuthPage = new FormAuthPage(page);
  });

  test('Navigate to Login page', async ({ page }) => {
    await expect(page).toHaveURL(/\/login/);
    await expect(formAuthPage.heading).toBeVisible({ timeout: 10000 });
  });

  test('Login with valid credentials', async ({ page }) => {
    await formAuthPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page).toHaveURL(/\/secure/);
    await expect(formAuthPage.flashMessage).toContainText(
      'You logged into a secure area!',
      { timeout: 10000 },
    );
  });

  test('Login with invalid credentials', async () => {
    await formAuthPage.login('invalid', 'invalid');
    await expect(formAuthPage.flashMessage).toContainText(
      'Your username is invalid!',
      { timeout: 10000 },
    );
  });
});
