import { expect, test } from '@playwright/test';
import { FileDownloadPage, HerokuHomePage } from '@objects';

test.describe('File Download', () => {
  let homePage: HerokuHomePage;
  let fileDownloadPage: FileDownloadPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('File Download');
    fileDownloadPage = new FileDownloadPage(page);
  });

  test('Navigate to File Download page', async ({ page }) => {
    await expect(page).toHaveURL(/\/download/);
    await expect(fileDownloadPage.heading).toBeVisible({ timeout: 10000 });
    const linkCount = await fileDownloadPage.downloadLinks.count();
    expect(linkCount).toBeGreaterThanOrEqual(1);
  });
});
