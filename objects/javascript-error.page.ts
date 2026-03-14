import { type Page } from '@playwright/test';

export class JavaScriptErrorPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getConsoleErrors(): Promise<string[]> {
    const errors: string[] = [];
    this.page.on('pageerror', (error) => {
      errors.push(error.message);
    });
    return errors;
  }
}
