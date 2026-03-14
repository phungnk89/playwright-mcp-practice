import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { KeyPressesPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Key Presses heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new KeyPressesPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

When(
  'I press the {string} key',
  async function (this: PlaywrightWorld, key: string) {
    const page = new KeyPressesPage(this.page);
    await page.pressKey(key);
  },
);

Then(
  'the key press result should show {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new KeyPressesPage(this.page);
    await expect(page.result).toContainText(text, { timeout: 10000 });
  },
);
