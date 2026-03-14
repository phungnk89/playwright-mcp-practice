import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LargeDeepDomPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Large Deep DOM heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new LargeDeepDomPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the large table should be visible',
  async function (this: PlaywrightWorld) {
    const page = new LargeDeepDomPage(this.page);
    await expect(page.table).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the large table should have {int} rows',
  async function (this: PlaywrightWorld, count: number) {
    const page = new LargeDeepDomPage(this.page);
    await expect(page.tableRows).toHaveCount(count);
  },
);
