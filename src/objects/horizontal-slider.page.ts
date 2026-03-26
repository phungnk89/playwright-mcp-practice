import { type Locator, type Page } from '@playwright/test';

export class HorizontalSliderPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly slider: Locator;
  readonly sliderValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.slider = page.locator('input[type="range"]');
    this.sliderValue = page.locator('#range');
  }

  async setSliderValue(value: string) {
    await this.slider.fill(value);
  }
}
