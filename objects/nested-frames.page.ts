import { type Page } from '@playwright/test';

export class NestedFramesPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getTopFrameText(name: string): Promise<string> {
    const topFrame = this.page.frameLocator('frame[name="frame-top"]');
    const childFrame = topFrame.frameLocator(`frame[name="frame-${name}"]`);
    return childFrame.locator('body').innerText();
  }

  async getBottomFrameText(): Promise<string> {
    const bottomFrame = this.page.frameLocator('frame[name="frame-bottom"]');
    return bottomFrame.locator('body').innerText();
  }
}
