import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DigestAuthPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Digest Auth heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new DigestAuthPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the Digest Auth message should contain {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new DigestAuthPage(this.page);
    await expect(page.message).toContainText(text);
  },
);
