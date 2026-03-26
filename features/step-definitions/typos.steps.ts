import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TyposPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Typos heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new TyposPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the Typos content should contain {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new TyposPage(this.page);
    await expect(page.content).toContainText(text);
  },
);
