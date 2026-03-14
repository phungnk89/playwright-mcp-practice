import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CheckboxesPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Checkboxes heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new CheckboxesPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'there should be {int} checkboxes',
  async function (this: PlaywrightWorld, count: number) {
    const page = new CheckboxesPage(this.page);
    await expect(page.checkboxes).toHaveCount(count);
  },
);

When(
  'I toggle checkbox {int}',
  async function (this: PlaywrightWorld, index: number) {
    const page = new CheckboxesPage(this.page);
    await page.toggleCheckbox(index);
  },
);

Then(
  'checkbox {int} should be checked',
  async function (this: PlaywrightWorld, index: number) {
    const page = new CheckboxesPage(this.page);
    await expect(page.checkboxes.nth(index)).toBeChecked();
  },
);

Then(
  'checkbox {int} should not be checked',
  async function (this: PlaywrightWorld, index: number) {
    const page = new CheckboxesPage(this.page);
    await expect(page.checkboxes.nth(index)).not.toBeChecked();
  },
);
