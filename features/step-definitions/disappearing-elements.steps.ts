import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DisappearingElementsPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Disappearing Elements heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new DisappearingElementsPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the navigation should contain at least {int} links',
  async function (this: PlaywrightWorld, count: number) {
    const page = new DisappearingElementsPage(this.page);
    const linkCount = await page.navLinks.count();
    expect(linkCount).toBeGreaterThanOrEqual(count);
  },
);

Then(
  'the navigation should include {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new DisappearingElementsPage(this.page);
    const texts = await page.getNavTexts();
    expect(texts).toContain(text);
  },
);
