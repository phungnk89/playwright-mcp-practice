import { expect, test } from '@playwright/test';
import { HerokuHomePage, SecureFileDownloadPage } from '@objects';

test.describe('Secure File Download', () => {
  test.use({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },
  });

  test('Navigate to Secure File Download page with valid credentials', async ({
    page,
  }) => {
    const homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Secure File Download');
    await expect(page).toHaveURL(/\/download_secure/);
    const secureDownloadPage = new SecureFileDownloadPage(page);
    await expect(secureDownloadPage.heading).toBeVisible({ timeout: 10000 });
  });
});
