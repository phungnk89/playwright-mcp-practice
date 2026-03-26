import { expect, test } from '@playwright/test';
import { CheckboxesPage, HerokuHomePage } from '@objects';

test.describe('Checkboxes', () => {
  let homePage: HerokuHomePage;
  let checkboxesPage: CheckboxesPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Checkboxes');
    checkboxesPage = new CheckboxesPage(page);
  });

  test('Navigate to Checkboxes page', async ({ page }) => {
    await expect(page).toHaveURL(/\/checkboxes/);
    await expect(checkboxesPage.heading).toBeVisible({ timeout: 10000 });
    await expect(checkboxesPage.checkboxes).toHaveCount(2);
  });

  test('Toggle checkbox 1', async () => {
    await checkboxesPage.toggleCheckbox(0);
    await expect(checkboxesPage.checkboxes.nth(0)).toBeChecked();
  });

  test('Untoggle checkbox 2', async () => {
    await checkboxesPage.toggleCheckbox(1);
    await expect(checkboxesPage.checkboxes.nth(1)).not.toBeChecked();
  });
});
