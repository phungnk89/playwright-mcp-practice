import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FramesPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Frames heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new FramesPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the Nested Frames link should be visible',
  async function (this: PlaywrightWorld) {
    const page = new FramesPage(this.page);
    await expect(page.nestedFramesLink).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the iFrame link should be visible',
  async function (this: PlaywrightWorld) {
    const page = new FramesPage(this.page);
    await expect(page.iframeLink).toBeVisible({ timeout: 10000 });
  },
);
