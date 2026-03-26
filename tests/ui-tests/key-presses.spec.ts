import { expect, test } from '@playwright/test';
import { HerokuHomePage, KeyPressesPage } from '@objects';

test.describe('Key Presses', () => {
  let homePage: HerokuHomePage;
  let keyPressesPage: KeyPressesPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Key Presses');
    keyPressesPage = new KeyPressesPage(page);
  });

  test('Navigate to Key Presses page', async ({ page }) => {
    await expect(page).toHaveURL(/\/key_presses/);
    await expect(keyPressesPage.heading).toBeVisible({ timeout: 10000 });
  });

  test('Press Enter key', async () => {
    await keyPressesPage.pressKey('Enter');
    await expect(keyPressesPage.result).toContainText('You entered: ENTER', {
      timeout: 10000,
    });
  });

  test('Press Tab key', async () => {
    await keyPressesPage.pressKey('Tab');
    await expect(keyPressesPage.result).toContainText('You entered: TAB', {
      timeout: 10000,
    });
  });
});
