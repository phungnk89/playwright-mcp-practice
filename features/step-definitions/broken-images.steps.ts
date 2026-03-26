import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrokenImagesPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Broken Images heading should be visible',
  async function (this: PlaywrightWorld) {
    const brokenImagesPage = new BrokenImagesPage(this.page);
    await expect(brokenImagesPage.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'there should be {int} images on the page',
  async function (this: PlaywrightWorld, count: number) {
    const brokenImagesPage = new BrokenImagesPage(this.page);
    await expect(brokenImagesPage.images).toHaveCount(count);
  },
);

Then(
  'image {int} should be broken',
  async function (this: PlaywrightWorld, index: number) {
    const brokenImagesPage = new BrokenImagesPage(this.page);
    const isBroken = await brokenImagesPage.isImageBroken(index);
    expect(isBroken).toBe(true);
  },
);

Then(
  'image {int} should not be broken',
  async function (this: PlaywrightWorld, index: number) {
    const brokenImagesPage = new BrokenImagesPage(this.page);
    const isBroken = await brokenImagesPage.isImageBroken(index);
    expect(isBroken).toBe(false);
  },
);
