import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HerokuHomePage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Given('I am on the Heroku home page', async function (this: PlaywrightWorld) {
  const homePage = new HerokuHomePage(this.page);
  await homePage.navigate();
});

Given(
  'the homepage heading is visible',
  async function (this: PlaywrightWorld) {
    const homePage = new HerokuHomePage(this.page);
    await expect(homePage.heading).toBeVisible({ timeout: 10000 });
  },
);

When(
  'I click on the {string} example',
  async function (this: PlaywrightWorld, linkText: string) {
    const homePage = new HerokuHomePage(this.page);
    await homePage.clickExample(linkText);
  },
);

Then(
  'the URL should match {string}',
  async function (this: PlaywrightWorld, urlPattern: string) {
    await expect(this.page).toHaveURL(new RegExp(urlPattern));
  },
);
