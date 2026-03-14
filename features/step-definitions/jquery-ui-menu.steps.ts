import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { JQueryUIMenuPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the JQuery UI Menu heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new JQueryUIMenuPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then('the menu should be visible', async function (this: PlaywrightWorld) {
  const page = new JQueryUIMenuPage(this.page);
  await expect(page.menu).toBeVisible({ timeout: 10000 });
});
