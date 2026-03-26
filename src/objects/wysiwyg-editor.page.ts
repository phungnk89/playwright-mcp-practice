import { type Locator, type Page } from '@playwright/test';

export class WYSIWYGEditorPage {
  private readonly page: Page;
  readonly heading: Locator;
  readonly editorIframe: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h3');
    this.editorIframe = page.locator('#mce_0_ifr');
  }

  async getEditorContent(): Promise<string> {
    const frame = this.page.frameLocator('#mce_0_ifr');
    return frame.locator('#tinymce').innerText();
  }
}
