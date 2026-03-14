import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { GeolocationPage } from '../../objects';
import { PlaywrightWorld } from '../support/world';

Then(
  'the Geolocation heading should be visible',
  async function (this: PlaywrightWorld) {
    const page = new GeolocationPage(this.page);
    await expect(page.heading).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the Where am I button should be visible',
  async function (this: PlaywrightWorld) {
    const page = new GeolocationPage(this.page);
    await expect(page.whereAmIButton).toBeVisible({ timeout: 10000 });
  },
);

When('I click the Where am I button', async function (this: PlaywrightWorld) {
  await this.context.grantPermissions(['geolocation']);
  await this.context.setGeolocation({
    latitude: 37.7749,
    longitude: -122.4194,
  });
  const page = new GeolocationPage(this.page);
  await page.clickWhereAmI();
});

Then(
  'the latitude should be displayed',
  async function (this: PlaywrightWorld) {
    const page = new GeolocationPage(this.page);
    await expect(page.latitude).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'the longitude should be displayed',
  async function (this: PlaywrightWorld) {
    const page = new GeolocationPage(this.page);
    await expect(page.longitude).toBeVisible({ timeout: 10000 });
  },
);
