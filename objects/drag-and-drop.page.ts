import { type Locator, type Page } from '@playwright/test';

export class DragAndDropPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }
}
