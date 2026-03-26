import { type Locator, type Page } from '@playwright/test';

export class BrokenImagesPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly images: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.images = page.locator('.example img');
  }

  async isImageBroken(index: number): Promise<boolean> {
    return this.images.nth(index).evaluate(
      (img: HTMLImageElement) =>
        new Promise<boolean>((resolve) => {
          if (img.complete) {
            resolve(img.naturalWidth === 0);
          } else {
            img.onload = () => resolve(false);
            img.onerror = () => resolve(true);
          }
        }),
    );
  }
}
