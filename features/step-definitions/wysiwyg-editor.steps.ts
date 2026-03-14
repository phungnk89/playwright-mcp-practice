import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { WYSIWYGEditorPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the WYSIWYG Editor heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new WYSIWYGEditorPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);
