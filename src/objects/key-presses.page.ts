import { type Locator, type Page } from '@playwright/test';

export class KeyPressesPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly input: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.input = page.locator('#target');
    this.result = page.locator('#result');
  }

  async pressKey(key: string) {
    await this.input.click();
    await this.page.evaluate(() => {
      document.querySelector('form')?.addEventListener('submit', (e) => e.preventDefault(), { once: true });
    });
    await this.page.keyboard.press(key);
  }
}
