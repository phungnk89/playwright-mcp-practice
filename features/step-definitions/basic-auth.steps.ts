import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BasicAuthPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Basic Auth heading should be visible',
  async function (this: PlaywrightWorld) {
    const basicAuthPage = new BasicAuthPage(this.page);
    await expect(basicAuthPage.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the Basic Auth heading should show {string}',
  async function (this: PlaywrightWorld, text: string) {
    const basicAuthPage = new BasicAuthPage(this.page);
    await expect(basicAuthPage.heading).toHaveText(new RegExp(text));
  },
);

Then(
  'the Basic Auth message should contain {string}',
  async function (this: PlaywrightWorld, text: string) {
    const basicAuthPage = new BasicAuthPage(this.page);
    await expect(basicAuthPage.message).toContainText(text);
  },
);
