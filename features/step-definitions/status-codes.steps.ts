import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { StatusCodesPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Status Codes heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new StatusCodesPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

When(
  'I click the {string} status code link',
  async function (this: PlaywrightWorld, code: string) {
    const page = new StatusCodesPage(this.page);
    await page.clickStatusCode(code);
  },
);
