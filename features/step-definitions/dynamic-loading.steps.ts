import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DynamicLoadingPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Dynamic Loading heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new DynamicLoadingPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

When('I click on the Example 1 link', async function (this: PlaywrightWorld) {
  const page = new DynamicLoadingPage(this.page);
  await page.example1Link.click();
});

When('I click the Start button', async function (this: PlaywrightWorld) {
  const page = new DynamicLoadingPage(this.page);
  await page.clickStart();
});

Then(
  'the finish text {string} should appear',
  async function (this: PlaywrightWorld, text: string) {
    const page = new DynamicLoadingPage(this.page);
    await expect(page.finishText).toHaveText(text, { timeout: 30000 });
  },
);
