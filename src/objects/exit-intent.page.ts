import { type Locator, type Page } from '@playwright/test';

export class ExitIntentPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly modal: Locator;
  readonly modalTitle: Locator;
  readonly modalCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('.example h3');
    this.modal = page.locator('.modal');
    this.modalTitle = page.locator('.modal-title h3');
    this.modalCloseButton = page.locator('.modal-footer p');
  }
}
