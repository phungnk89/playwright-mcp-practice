import { type Locator, type Page } from '@playwright/test';

export class ForgotPasswordPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h2');
    this.emailInput = page.locator('#email');
    this.submitButton = page.locator('#form_submit');
    this.content = page.locator('#content');
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }
}
