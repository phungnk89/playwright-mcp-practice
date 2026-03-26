import { expect, test } from '@playwright/test';
import { GeolocationPage, HerokuHomePage } from '@objects';

test.describe('Geolocation', () => {
  let homePage: HerokuHomePage;
  let geolocationPage: GeolocationPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Geolocation');
    geolocationPage = new GeolocationPage(page);
  });

  test('Navigate to Geolocation page', async ({ page }) => {
    await expect(page).toHaveURL(/\/geolocation/);
    await expect(geolocationPage.heading).toBeVisible({ timeout: 10000 });
    await expect(geolocationPage.whereAmIButton).toBeVisible({
      timeout: 10000,
    });
  });

  test('Get geolocation coordinates', async ({ context }) => {
    await context.grantPermissions(['geolocation']);
    await context.setGeolocation({ latitude: 37.7749, longitude: -122.4194 });
    await geolocationPage.clickWhereAmI();
    await expect(geolocationPage.latitude).toBeVisible({ timeout: 10000 });
    await expect(geolocationPage.longitude).toBeVisible({ timeout: 10000 });
  });
});
