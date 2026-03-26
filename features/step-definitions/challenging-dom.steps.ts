import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ChallengingDomPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Challenging DOM heading should be visible',
  async function (this: PlaywrightWorld) {
    const challengingDomPage = new ChallengingDomPage(this.page);
    await expect(challengingDomPage.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'there should be {int} buttons on the page',
  async function (this: PlaywrightWorld, count: number) {
    const challengingDomPage = new ChallengingDomPage(this.page);
    await expect(challengingDomPage.buttons).toHaveCount(count);
  },
);

Then('the table should be visible', async function (this: PlaywrightWorld) {
  const challengingDomPage = new ChallengingDomPage(this.page);
  await expect(challengingDomPage.table).toBeVisible({ timeout: 10000 });
});

Then(
  'there should be {int} table rows',
  async function (this: PlaywrightWorld, count: number) {
    const challengingDomPage = new ChallengingDomPage(this.page);
    await expect(challengingDomPage.tableRows).toHaveCount(count);
  },
);

Then('the canvas should be visible', async function (this: PlaywrightWorld) {
  const challengingDomPage = new ChallengingDomPage(this.page);
  await expect(challengingDomPage.canvas).toBeVisible({ timeout: 10000 });
});

When(
  'I click each button and verify the button texts change',
  async function (this: PlaywrightWorld) {
    const challengingDomPage = new ChallengingDomPage(this.page);
    for (let i = 0; i < 3; i++) {
      await challengingDomPage.clickButton(i);
      await this.page.waitForTimeout(500);
      const texts = await challengingDomPage.getButtonTexts();
      expect(texts.length).toBe(3);
    }
  },
);

When(
  'I click all {int} buttons',
  async function (this: PlaywrightWorld, count: number) {
    const challengingDomPage = new ChallengingDomPage(this.page);
    for (let i = 0; i < count; i++) {
      await challengingDomPage.clickButton(i);
    }
  },
);
