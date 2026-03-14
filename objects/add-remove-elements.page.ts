import { type Locator, type Page } from '@playwright/test';

export class AddRemoveElementsPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly addButton: Locator;
  readonly deleteButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.addButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteButtons = page.locator('.added-manually');
  }

  async clickAddElement() {
    await this.addButton.click();
  }

  async clickDeleteElement(index = 0) {
    await this.deleteButtons.nth(index).click();
  }
}
