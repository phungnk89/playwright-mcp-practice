import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { NestedFramesPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the bottom frame should contain {string}',
  async function (this: PlaywrightWorld, text: string) {
    const page = new NestedFramesPage(this.page);
    const bottomText = await page.getBottomFrameText();
    expect(bottomText.trim()).toBe(text);
  },
);
