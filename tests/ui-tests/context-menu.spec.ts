import { expect, test } from '@playwright/test';
import { ContextMenuPage, HerokuHomePage } from '@objects';

test.describe('Context Menu', () => {
  let homePage: HerokuHomePage;
  let contextMenuPage: ContextMenuPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Context Menu');
    contextMenuPage = new ContextMenuPage(page);
  });

  test('Navigate to Context Menu page', async ({ page }) => {
    await expect(page).toHaveURL(/\/context_menu/);
    await expect(contextMenuPage.heading).toBeVisible({ timeout: 10000 });
    await expect(contextMenuPage.hotSpot).toBeVisible({ timeout: 10000 });
  });

  test('Right-click triggers a JavaScript alert', async ({ page }) => {
    let alertMessage = '';
    page.once('dialog', async (dialog) => {
      alertMessage = dialog.message();
      await dialog.accept();
    });
    await contextMenuPage.rightClickHotSpot();
    expect(alertMessage).toBe('You selected a context menu');
  });
});
