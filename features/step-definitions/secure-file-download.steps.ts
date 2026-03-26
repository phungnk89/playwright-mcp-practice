import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SecureFileDownloadPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Secure File Download heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new SecureFileDownloadPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);
