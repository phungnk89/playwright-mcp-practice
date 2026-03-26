import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HorizontalSliderPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Horizontal Slider heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new HorizontalSliderPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then('the slider should be visible', async function (this: PlaywrightWorld) {
  const page = new HorizontalSliderPage(this.page);
  await expect(page.slider).toBeVisible({ timeout: 10000 });
});

When(
  'I set the slider value to {string}',
  async function (this: PlaywrightWorld, value: string) {
    const page = new HorizontalSliderPage(this.page);
    await page.setSliderValue(value);
  },
);

Then(
  'the slider display value should be {string}',
  async function (this: PlaywrightWorld, value: string) {
    const page = new HorizontalSliderPage(this.page);
    await expect(page.sliderValue).toHaveText(value);
  },
);
