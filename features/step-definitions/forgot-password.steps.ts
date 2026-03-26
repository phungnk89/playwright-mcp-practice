import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ForgotPasswordPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Forgot Password heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ForgotPasswordPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the email input should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ForgotPasswordPage(this.page);
    await expect(page.emailInput).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the retrieve password button should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ForgotPasswordPage(this.page);
    await expect(page.submitButton).toBeVisible({ timeout: 10000 });
  },
);

When(
  'I enter email {string}',
  async function (this: PlaywrightWorld, email: string) {
    const page = new ForgotPasswordPage(this.page);
    await page.enterEmail(email);
  },
);

When(
  'I click the retrieve password button',
  async function (this: PlaywrightWorld) {
    const page = new ForgotPasswordPage(this.page);
    await page.clickSubmit();
  },
);

Then(
  'the forgot password page should respond',
  async function (this: PlaywrightWorld) {
    await this.page.waitForLoadState('networkidle', { timeout: 10000 });
  },
);
