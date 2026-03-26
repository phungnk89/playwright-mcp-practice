import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FormAuthPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Form Auth heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new FormAuthPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

When(
  'I login with username {string} and password {string}',
  async function (this: PlaywrightWorld, username: string, password: string) {
    const page = new FormAuthPage(this.page);
    await page.login(username, password);
  },
);

Then(
  'the flash message should contain {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new FormAuthPage(this.page);
    await expect(page.flashMessage).toContainText(text, { timeout: 10000 });
  },
);
