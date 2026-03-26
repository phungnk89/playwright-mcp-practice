import { expect, test } from '@playwright/test';
import { ForgotPasswordPage, HerokuHomePage } from '@objects';

test.describe('Forgot Password', () => {
  let homePage: HerokuHomePage;
  let forgotPasswordPage: ForgotPasswordPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Forgot Password');
    forgotPasswordPage = new ForgotPasswordPage(page);
  });

  test('Navigate to Forgot Password page', async ({ page }) => {
    await expect(page).toHaveURL(/\/forgot_password/);
    await expect(forgotPasswordPage.heading).toBeVisible({ timeout: 10000 });
    await expect(forgotPasswordPage.emailInput).toBeVisible({ timeout: 10000 });
    await expect(forgotPasswordPage.submitButton).toBeVisible({
      timeout: 10000,
    });
  });

  test('Submit forgot password form', async ({ page }) => {
    await forgotPasswordPage.enterEmail('test@example.com');
    await forgotPasswordPage.clickSubmit();
    await page.waitForLoadState('networkidle', { timeout: 10000 });
  });
});
