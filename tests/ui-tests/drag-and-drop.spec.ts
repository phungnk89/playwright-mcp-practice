import { expect, test } from '@playwright/test';
import { DragAndDropPage, HerokuHomePage } from '@objects';

test.describe('Drag and Drop', () => {
  let homePage: HerokuHomePage;
  let dragDropPage: DragAndDropPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Drag and Drop');
    dragDropPage = new DragAndDropPage(page);
  });

  test('Navigate to Drag and Drop page', async ({ page }) => {
    await expect(page).toHaveURL(/\/drag_and_drop/);
    await expect(dragDropPage.heading).toBeVisible({ timeout: 10000 });
    await expect(dragDropPage.columnA).toBeVisible({ timeout: 10000 });
    await expect(dragDropPage.columnB).toBeVisible({ timeout: 10000 });
  });

  test('Verify initial column headers', async () => {
    await expect(dragDropPage.columnA.locator('header')).toHaveText('A');
    await expect(dragDropPage.columnB.locator('header')).toHaveText('B');
  });
});
