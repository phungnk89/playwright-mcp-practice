import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { FileUploadPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the File Upload heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new FileUploadPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the upload button should be visible',
  async function (this: PlaywrightWorld) {
    const page = new FileUploadPage(this.page);
    await expect(page.uploadButton).toBeVisible({ timeout: 10000 });
  },
);

When('I upload a test file', async function (this: PlaywrightWorld) {
  const testFilePath = path.join(process.cwd(), 'test-upload.txt');
  fs.writeFileSync(testFilePath, 'test file content');
  const page = new FileUploadPage(this.page);
  await page.uploadFile(testFilePath);
});

Then(
  'the uploaded file name should be displayed',
  async function (this: PlaywrightWorld) {
    const page = new FileUploadPage(this.page);
    await expect(page.uploadedFiles).toContainText('test-upload.txt');
  },
);
