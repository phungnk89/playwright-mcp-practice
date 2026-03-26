import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DragAndDropPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Drag and Drop heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new DragAndDropPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then('column A should be visible', async function (this: PlaywrightWorld) {
  const page = new DragAndDropPage(this.page);
  await expect(page.columnA).toBeVisible({ timeout: 10000 });
});

Then('column B should be visible', async function (this: PlaywrightWorld) {
  const page = new DragAndDropPage(this.page);
  await expect(page.columnB).toBeVisible({ timeout: 10000 });
});

Then(
  'column A header should show {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new DragAndDropPage(this.page);
    await expect(page.columnA.locator('header')).toHaveText(text);
  },
);

Then(
  'column B header should show {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new DragAndDropPage(this.page);
    await expect(page.columnB.locator('header')).toHaveText(text);
  },
);
