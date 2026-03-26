import { expect, test } from '@playwright/test';
import { EntryAdPage, HerokuHomePage } from '@objects';

test.describe('Entry Ad', () => {
  test('Navigate to Entry Ad page and see modal', async ({ page }) => {
    const homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Entry Ad');
    await expect(page).toHaveURL(/\/entry_ad/);
    const entryAdPage = new EntryAdPage(page);
    await expect(entryAdPage.modalTitle).toBeVisible({ timeout: 10000 });
    await expect(entryAdPage.modalTitle).toContainText(
      'This is a modal window',
    );
  });

  test('Close the entry ad modal', async ({ page }) => {
    const homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Entry Ad');
    const entryAdPage = new EntryAdPage(page);
    await expect(entryAdPage.modalCloseButton).toBeVisible({ timeout: 10000 });
    await entryAdPage.closeModal();
    await expect(entryAdPage.heading).toBeVisible({ timeout: 10000 });
  });
});
