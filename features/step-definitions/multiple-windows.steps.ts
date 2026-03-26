import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { MultipleWindowsPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Multiple Windows heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new MultipleWindowsPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the Click Here link should be visible',
  async function (this: PlaywrightWorld) {
    const page = new MultipleWindowsPage(this.page);
    await expect(page.clickHereLink).toBeVisible({ timeout: 10000 });
  },
);

When('I click the Click Here link', async function (this: PlaywrightWorld) {
  const page = new MultipleWindowsPage(this.page);
  const [newPage] = await Promise.all([
    this.context.waitForEvent('page'),
    page.clickHereLink.click(),
  ]);
  await newPage.waitForLoadState();
  (this as any)._newPage = newPage;
});

Then(
  'a new window should open with text {string}',
  async function (this: PlaywrightWorld, text: string) {
    const newPage = (this as any)._newPage;
    expect(newPage).toBeTruthy();
    await expect(newPage.locator('h3')).toHaveText(text);
  },
);
