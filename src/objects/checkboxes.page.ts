import { type Locator, type Page } from '@playwright/test';

export class CheckboxesPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly checkboxes: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.checkboxes = page.locator('#checkboxes input[type="checkbox"]');
  }

  async toggleCheckbox(index: number) {
    await this.checkboxes.nth(index).click();
  }

  async isChecked(index: number): Promise<boolean> {
    return this.checkboxes.nth(index).isChecked();
  }
}
