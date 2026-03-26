import { expect, test } from '@playwright/test';
import { HerokuHomePage, InputsPage } from '@objects';

test.describe('Inputs', () => {
  let homePage: HerokuHomePage;
  let inputsPage: InputsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Inputs');
    inputsPage = new InputsPage(page);
  });

  test('Navigate to Inputs page', async ({ page }) => {
    await expect(page).toHaveURL(/\/inputs/);
    await expect(inputsPage.heading).toBeVisible({ timeout: 10000 });
    await expect(inputsPage.numberInput).toBeVisible({ timeout: 10000 });
  });

  test('Enter a number in the input', async () => {
    await inputsPage.enterNumber('42');
    await expect(inputsPage.numberInput).toHaveValue('42');
  });
});
