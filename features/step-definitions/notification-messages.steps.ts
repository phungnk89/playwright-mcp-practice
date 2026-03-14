import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { NotificationMessagePage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Notification Messages heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new NotificationMessagePage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the notification flash message should be visible',
  async function (this: PlaywrightWorld) {
    const page = new NotificationMessagePage(this.page);
    await expect(page.flashMessage).toBeVisible({ timeout: 10000 });
  },
);

When(
  'I click the notification click here link',
  async function (this: PlaywrightWorld) {
    const page = new NotificationMessagePage(this.page);
    await page.loadNewMessage();
  },
);
