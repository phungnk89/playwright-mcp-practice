import { type Locator, type Page } from '@playwright/test';

export class HoversPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly figures: Locator;
  readonly figureImages: Locator;
  readonly figureCaption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.figures = page.locator('.figure');
    this.figureImages = page.locator('.figure img');
    this.figureCaption = page.locator('.figcaption');
  }

  async hoverOverFigure(index: number) {
    await this.figures.nth(index).hover();
  }

  getCaptionAt(index: number): Locator {
    return this.figureCaption.nth(index);
  }
}
