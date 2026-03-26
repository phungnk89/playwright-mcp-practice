import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ContextMenuPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Context Menu heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ContextMenuPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the hot spot area should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ContextMenuPage(this.page);
    await expect(page.hotSpot).toBeVisible({ timeout: 10000 });
  },
);

When('I right-click the hot spot area', async function (this: PlaywrightWorld) {
  const page = new ContextMenuPage(this.page);
  this.page.once('dialog', (dialog) => {
    this.attach(`Alert message: ${dialog.message()}`);
    (this as any)._lastAlertMessage = dialog.message();
    dialog.accept();
  });
  await page.rightClickHotSpot();
});

Then(
  'a JavaScript alert should appear with text {string}',
  async function (this: PlaywrightWorld, expectedText: string) {
    expect((this as any)._lastAlertMessage).toBe(expectedText);
  },
);
