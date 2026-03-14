import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DropdownPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Dropdown heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new DropdownPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then('the dropdown should be visible', async function (this: PlaywrightWorld) {
  const page = new DropdownPage(this.page);
  await expect(page.dropdown).toBeVisible({ timeout: 10000 });
});

When(
  'I select option {string} from the dropdown',
  async function (this: PlaywrightWorld, value: string) {
    const page = new DropdownPage(this.page);
    await page.selectOption(value);
  },
);

Then(
  'the dropdown should have value {string}',
  async function (this: PlaywrightWorld, value: string) {
    const page = new DropdownPage(this.page);
    const selectedValue = await page.getSelectedValue();
    expect(selectedValue).toBe(value);
  },
);
