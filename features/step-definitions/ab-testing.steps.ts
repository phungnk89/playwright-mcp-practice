import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ABTestPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the A\\/B Test heading should be visible',
  async function (this: PlaywrightWorld) {
    const abTestPage = new ABTestPage(this.page);
    await expect(abTestPage.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the A\\/B Test heading should match {string} or {string}',
  async function (this: PlaywrightWorld, option1: string, option2: string) {
    const abTestPage = new ABTestPage(this.page);
    await expect(abTestPage.heading).toHaveText(
      new RegExp(`${option1}|${option2}`),
    );
  },
);

Then(
  'the A\\/B Test description should be visible',
  async function (this: PlaywrightWorld) {
    const abTestPage = new ABTestPage(this.page);
    await expect(abTestPage.description).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the A\\/B Test description should contain {string}',
  async function (this: PlaywrightWorld, text: string) {
    const abTestPage = new ABTestPage(this.page);
    await expect(abTestPage.description).toContainText(text);
  },
);
