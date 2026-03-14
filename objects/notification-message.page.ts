import { type Locator, type Page } from '@playwright/test';

export class NotificationMessagePage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly flashMessage: Locator;
  readonly clickHereLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.flashMessage = page.locator('#flash');
    this.clickHereLink = page.getByRole('link', { name: 'Click here' });
  }

  async loadNewMessage() {
    await this.clickHereLink.click();
  }
}
