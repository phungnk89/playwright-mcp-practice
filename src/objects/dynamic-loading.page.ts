import { type Locator, type Page } from '@playwright/test';

export class DynamicLoadingPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly example1Link: Locator;
  readonly example2Link: Locator;
  readonly startButton: Locator;
  readonly loading: Locator;
  readonly finishText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3').first();
    this.example1Link = page.getByRole('link', { name: 'Example 1' });
    this.example2Link = page.getByRole('link', { name: 'Example 2' });
    this.startButton = page.locator('#start button');
    this.loading = page.locator('#loading');
    this.finishText = page.locator('#finish h4');
  }

  async clickStart() {
    await this.startButton.click();
  }
}
