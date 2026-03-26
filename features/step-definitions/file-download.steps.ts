import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FileDownloadPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the File Download heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new FileDownloadPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'there should be at least {int} download link',
  async function (this: PlaywrightWorld, count: number) {
    const page = new FileDownloadPage(this.page);
    const linkCount = await page.downloadLinks.count();
    expect(linkCount).toBeGreaterThanOrEqual(count);
  },
);
