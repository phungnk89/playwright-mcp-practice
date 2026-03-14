import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { InfiniteScrollPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Infinite Scroll heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new InfiniteScrollPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);
