import { expect, test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { FileUploadPage, HerokuHomePage } from '@objects';

test.describe('File Upload', () => {
  let homePage: HerokuHomePage;
  let fileUploadPage: FileUploadPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('File Upload');
    fileUploadPage = new FileUploadPage(page);
  });

  test('Navigate to File Upload page', async ({ page }) => {
    await expect(page).toHaveURL(/\/upload/);
    await expect(fileUploadPage.heading).toBeVisible({ timeout: 10000 });
    await expect(fileUploadPage.uploadButton).toBeVisible({ timeout: 10000 });
  });

  test('Upload a file successfully', async () => {
    const testFilePath = path.join(process.cwd(), 'test-upload.txt');
    fs.writeFileSync(testFilePath, 'test file content');
    await fileUploadPage.uploadFile(testFilePath);
    await expect(fileUploadPage.uploadedFiles).toContainText('test-upload.txt');
  });
});
