import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FloatingMenuPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Floating Menu heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new FloatingMenuPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the floating menu should be visible',
  async function (this: PlaywrightWorld) {
    const page = new FloatingMenuPage(this.page);
    await expect(page.menu).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the floating menu should have {int} items',
  async function (this: PlaywrightWorld, count: number) {
    const page = new FloatingMenuPage(this.page);
    await expect(page.menuItems).toHaveCount(count);
  },
);

Then(
  'the floating menu should include {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new FloatingMenuPage(this.page);
    const texts = await page.getMenuTexts();
    expect(texts).toContain(text);
  },
);
