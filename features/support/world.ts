import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';

export class PlaywrightWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(contextOptions?: Record<string, unknown>) {
    this.browser = await chromium.launch({
      headless: true,
      args: [
        '--window-size=1920,1080',
        '--disable-blink-features=AutomationControlled',
      ],
    });
    this.context = await this.browser.newContext({
      viewport: { width: 1920, height: 1080 },
      ...contextOptions,
    });
    this.page = await this.context.newPage();
  }

  async cleanup() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(PlaywrightWorld);
