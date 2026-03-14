import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ShadowDomPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Shadow DOM heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new ShadowDomPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the shadow DOM should contain {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new ShadowDomPage(this.page);
    const content = await page.getShadowContent();
    expect(content).toContain(text);
  },
);
