import { expect, test } from '@playwright/test';
import { DigestAuthPage, HerokuHomePage } from '@objects';

test.describe('Digest Authentication', () => {
  test.use({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },
  });

  test('Navigate to Digest Auth page with valid credentials', async ({
    page,
  }) => {
    const homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Digest Authentication');
    await expect(page).toHaveURL(/\/digest_auth/);
    const digestAuthPage = new DigestAuthPage(page);
    await expect(digestAuthPage.heading).toBeVisible({ timeout: 10000 });
    await expect(digestAuthPage.message).toContainText('Congratulations');
  });
});
