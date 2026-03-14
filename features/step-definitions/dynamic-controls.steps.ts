import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DynamicControlsPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Dynamic Controls heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new DynamicControlsPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Given('the checkbox should be visible', async function (this: PlaywrightWorld) {
  const page = new DynamicControlsPage(this.page);
  await expect(page.checkbox).toBeVisible({ timeout: 10000 });
});

When('I click the Remove button', async function (this: PlaywrightWorld) {
  const page = new DynamicControlsPage(this.page);
  await page.clickRemoveAddButton();
});

When('I click the Add button', async function (this: PlaywrightWorld) {
  const page = new DynamicControlsPage(this.page);
  await expect(page.message).toBeVisible({ timeout: 10000 });
  await page.clickRemoveAddButton();
  await expect(page.checkbox).toBeVisible({ timeout: 10000 });
});

Then(
  'the message {string} should appear',
  async function (this: PlaywrightWorld, text: string) {
    const page = new DynamicControlsPage(this.page);
    await expect(page.message).toContainText(text, { timeout: 10000 });
  },
);

Given(
  'the input field should be disabled',
  async function (this: PlaywrightWorld) {
    const page = new DynamicControlsPage(this.page);
    await expect(page.input).toBeDisabled();
  },
);

When('I click the Enable button', async function (this: PlaywrightWorld) {
  const page = new DynamicControlsPage(this.page);
  await page.clickEnableDisableButton();
});

Then(
  'the input field should be enabled',
  async function (this: PlaywrightWorld) {
    const page = new DynamicControlsPage(this.page);
    await expect(page.input).toBeEnabled({ timeout: 10000 });
  },
);

When('I click the Disable button', async function (this: PlaywrightWorld) {
  const page = new DynamicControlsPage(this.page);
  await page.clickEnableDisableButton();
});
