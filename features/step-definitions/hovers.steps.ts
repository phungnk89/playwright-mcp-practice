import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HoversPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Hovers heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new HoversPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'there should be {int} figure images',
  async function (this: PlaywrightWorld, count: number) {
    const page = new HoversPage(this.page);
    await expect(page.figureImages).toHaveCount(count);
  },
);

When(
  'I hover over figure {int}',
  async function (this: PlaywrightWorld, index: number) {
    const page = new HoversPage(this.page);
    await page.hoverOverFigure(index);
  },
);

Then(
  'the caption for figure {int} should be visible',
  async function (this: PlaywrightWorld, index: number) {
    const page = new HoversPage(this.page);
    await expect(page.getCaptionAt(index)).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the caption for figure {int} should contain {string}',
  async function (this: PlaywrightWorld, index: number, text: string) {
    const page = new HoversPage(this.page);
    await expect(page.getCaptionAt(index)).toContainText(text);
  },
);
