import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightWorld } from '@support/world';

When('I listen for JavaScript errors', async function (this: PlaywrightWorld) {
  (this as any)._jsErrors = [] as string[];
  this.page.on('pageerror', (error) => {
    (this as any)._jsErrors.push(error.message);
  });
});

Then(
  'a JavaScript error should have been detected',
  async function (this: PlaywrightWorld) {
    // Wait a moment for errors to be collected
    await this.page.waitForTimeout(2000);
    const errors = (this as any)._jsErrors as string[];
    expect(errors.length).toBeGreaterThan(0);
  },
);
