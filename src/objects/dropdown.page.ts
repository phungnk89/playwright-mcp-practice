import { type Locator, type Page } from '@playwright/test';

export class DropdownPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.dropdown = page.locator('#dropdown');
  }

  async selectOption(value: string) {
    await this.dropdown.selectOption(value);
  }

  async getSelectedValue(): Promise<string> {
    return this.dropdown.inputValue();
  }
}
