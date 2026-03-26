import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SlowResourcesPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Slow Resources heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new SlowResourcesPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);
