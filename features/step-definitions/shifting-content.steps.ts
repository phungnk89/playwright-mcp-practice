import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ShiftingContentPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Shifting Content heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ShiftingContentPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the menu example link should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ShiftingContentPage(this.page);
    await expect(page.menuLink).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the image example link should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ShiftingContentPage(this.page);
    await expect(page.imageLink).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the list example link should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ShiftingContentPage(this.page);
    await expect(page.listLink).toBeVisible({ timeout: 10000 });
  },
);
