import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { RedirectLinkPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Redirect Link heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new RedirectLinkPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

When('I click the redirect link', async function (this: PlaywrightWorld) {
  const page = new RedirectLinkPage(this.page);
  await page.clickRedirect();
});
