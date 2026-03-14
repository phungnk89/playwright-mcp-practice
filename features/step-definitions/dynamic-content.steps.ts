import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DynamicContentPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Dynamic Content heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new DynamicContentPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'there should be {int} content images',
  async function (this: PlaywrightWorld, count: number) {
    const page = new DynamicContentPage(this.page);
    await expect(page.images).toHaveCount(count);
  },
);
