import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { InputsPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Inputs heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new InputsPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the number input should be visible',
  async function (this: PlaywrightWorld) {
    const page = new InputsPage(this.page);
    await expect(page.numberInput).toBeVisible({ timeout: 10000 });
  },
);

When(
  'I enter the number {string} in the input',
  async function (this: PlaywrightWorld, value: string) {
    const page = new InputsPage(this.page);
    await page.enterNumber(value);
  },
);

Then(
  'the number input should have value {string}',
  async function (this: PlaywrightWorld, value: string) {
    const page = new InputsPage(this.page);
    await expect(page.numberInput).toHaveValue(value);
  },
);
