import { type Locator, type Page } from '@playwright/test';

export class EntryAdPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly modalTitle: Locator;
  readonly modalBody: Locator;
  readonly modalCloseButton: Locator;
  readonly reEnableLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('.example h3');
    this.modalTitle = page.locator('.modal-title h3');
    this.modalBody = page.locator('.modal-body');
    this.modalCloseButton = page.locator('.modal-footer p');
    this.reEnableLink = page.locator('#restart-ad');
  }

  async closeModal() {
    await this.modalCloseButton.click();
  }
}
