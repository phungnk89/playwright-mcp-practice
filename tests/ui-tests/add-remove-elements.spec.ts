import { expect, test } from '@playwright/test';
import { AddRemoveElementsPage, HerokuHomePage } from '@objects';

test.describe('Add/Remove Elements', () => {
  let homePage: HerokuHomePage;
  let addRemovePage: AddRemoveElementsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Add/Remove Elements');
    addRemovePage = new AddRemoveElementsPage(page);
  });

  test('Navigate to Add/Remove Elements page', async ({ page }) => {
    await expect(page).toHaveURL(/\/add_remove_elements/);
    await expect(addRemovePage.heading).toHaveText(/Add\/Remove Elements/);
    await expect(addRemovePage.addButton).toBeVisible({ timeout: 10000 });
  });

  test('Add an element and verify it appears', async () => {
    await expect(addRemovePage.deleteButtons).toHaveCount(0);
    await addRemovePage.clickAddElement();
    await expect(addRemovePage.deleteButtons).toHaveCount(1);
    await expect(addRemovePage.deleteButtons.first()).toBeVisible({
      timeout: 10000,
    });
  });

  test('Delete an added element and verify it is removed', async () => {
    await addRemovePage.clickAddElement();
    await expect(addRemovePage.deleteButtons).toHaveCount(1);
    await addRemovePage.clickDeleteElement();
    await expect(addRemovePage.deleteButtons).toHaveCount(0);
  });
});
