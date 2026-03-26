import { type Locator, type Page } from '@playwright/test';

export class JQueryUIMenuPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly menu: Locator;
  readonly menuItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.menu = page.locator('#menu');
    this.menuItems = page.locator('#menu li');
  }
}
