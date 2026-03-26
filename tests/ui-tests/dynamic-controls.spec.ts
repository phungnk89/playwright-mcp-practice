import { expect, test } from '@playwright/test';
import { DynamicControlsPage, HerokuHomePage } from '@objects';

test.describe('Dynamic Controls', () => {
  let homePage: HerokuHomePage;
  let dynamicControlsPage: DynamicControlsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Dynamic Controls');
    dynamicControlsPage = new DynamicControlsPage(page);
  });

  test('Navigate to Dynamic Controls page', async ({ page }) => {
    await expect(page).toHaveURL(/\/dynamic_controls/);
    await expect(dynamicControlsPage.heading).toBeVisible({ timeout: 10000 });
  });

  test('Remove and add checkbox', async () => {
    await expect(dynamicControlsPage.checkbox).toBeVisible({ timeout: 10000 });
    await dynamicControlsPage.clickRemoveAddButton();
    await expect(dynamicControlsPage.message).toContainText("It's gone!", {
      timeout: 10000,
    });
    await dynamicControlsPage.clickRemoveAddButton();
    await expect(dynamicControlsPage.checkbox).toBeVisible({ timeout: 10000 });
    await expect(dynamicControlsPage.message).toContainText("It's back!", {
      timeout: 10000,
    });
  });

  test('Enable and disable input', async () => {
    await expect(dynamicControlsPage.input).toBeDisabled();
    await dynamicControlsPage.clickEnableDisableButton();
    await expect(dynamicControlsPage.input).toBeEnabled({ timeout: 10000 });
    await expect(dynamicControlsPage.message).toContainText("It's enabled!", {
      timeout: 10000,
    });
    await dynamicControlsPage.clickEnableDisableButton();
    await expect(dynamicControlsPage.input).toBeDisabled({ timeout: 10000 });
    await expect(dynamicControlsPage.message).toContainText("It's disabled!", {
      timeout: 10000,
    });
  });
});
