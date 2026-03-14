import { type Locator, type Page } from '@playwright/test';

export class FileUploadPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly fileInput: Locator;
  readonly uploadButton: Locator;
  readonly uploadedFiles: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.fileInput = page.locator('#file-upload');
    this.uploadButton = page.locator('#file-submit');
    this.uploadedFiles = page.locator('#uploaded-files');
  }

  async uploadFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
    await this.uploadButton.click();
  }
}
