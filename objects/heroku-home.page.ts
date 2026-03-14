import { type Locator, type Page } from '@playwright/test';

export class HerokuHomePage {
  private readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/', {
      timeout: 60000,
    });
  }

  async clickExample(linkText: string) {
    await this.page.getByRole('link', { name: linkText, exact: true }).click();
  }
}
