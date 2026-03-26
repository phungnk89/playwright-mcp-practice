import { type Locator, type Page } from '@playwright/test';

export class GeolocationPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly whereAmIButton: Locator;
  readonly latitude: Locator;
  readonly longitude: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.whereAmIButton = page.getByRole('button', { name: 'Where am I?' });
    this.latitude = page.locator('#lat-value');
    this.longitude = page.locator('#long-value');
  }

  async clickWhereAmI() {
    await this.whereAmIButton.click();
  }
}
