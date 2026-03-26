import { expect, test } from '@playwright/test';
import { BasicAuthPage, HerokuHomePage } from '@objects';

test.describe('Basic Auth', () => {
  test.use({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },
  });

  test('Log in with valid credentials and verify success', async ({ page }) => {
    const homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Basic Auth');
    await expect(page).toHaveURL(/\/basic_auth/);
    const basicAuthPage = new BasicAuthPage(page);
    await expect(basicAuthPage.heading).toBeVisible({ timeout: 10000 });
    await expect(basicAuthPage.heading).toHaveText(/Basic Auth/);
    await expect(basicAuthPage.message).toContainText(
      'Congratulations! You must have the proper credentials.',
    );
  });
});
