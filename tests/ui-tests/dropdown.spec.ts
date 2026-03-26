import { expect, test } from '@playwright/test';
import { DropdownPage, HerokuHomePage } from '@objects';

test.describe('Dropdown', () => {
  let homePage: HerokuHomePage;
  let dropdownPage: DropdownPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Dropdown');
    dropdownPage = new DropdownPage(page);
  });

  test('Navigate to Dropdown page', async ({ page }) => {
    await expect(page).toHaveURL(/\/dropdown/);
    await expect(dropdownPage.heading).toBeVisible({ timeout: 10000 });
    await expect(dropdownPage.dropdown).toBeVisible({ timeout: 10000 });
  });

  test('Select Option 1', async () => {
    await dropdownPage.selectOption('1');
    const value = await dropdownPage.getSelectedValue();
    expect(value).toBe('1');
  });

  test('Select Option 2', async () => {
    await dropdownPage.selectOption('2');
    const value = await dropdownPage.getSelectedValue();
    expect(value).toBe('2');
  });
});
