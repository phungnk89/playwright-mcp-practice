import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { EntryAdPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Entry Ad modal title should be visible',
  async function (this: PlaywrightWorld) {
    const page = new EntryAdPage(this.page);
    await expect(page.modalTitle).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the Entry Ad modal should contain {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new EntryAdPage(this.page);
    await expect(page.modalTitle).toContainText(text);
  },
);

When('I close the Entry Ad modal', async function (this: PlaywrightWorld) {
  const page = new EntryAdPage(this.page);
  await expect(page.modalCloseButton).toBeVisible({ timeout: 10000 });
  await page.closeModal();
});

Then(
  'the Entry Ad page heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new EntryAdPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);
