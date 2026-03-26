import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ExitIntentPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Exit Intent heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ExitIntentPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);
