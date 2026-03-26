import { expect, test } from '@playwright/test';
import { HerokuHomePage, HorizontalSliderPage } from '@objects';

test.describe('Horizontal Slider', () => {
  let homePage: HerokuHomePage;
  let sliderPage: HorizontalSliderPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Horizontal Slider');
    sliderPage = new HorizontalSliderPage(page);
  });

  test('Navigate to Horizontal Slider page', async ({ page }) => {
    await expect(page).toHaveURL(/\/horizontal_slider/);
    await expect(sliderPage.heading).toBeVisible({ timeout: 10000 });
    await expect(sliderPage.slider).toBeVisible({ timeout: 10000 });
  });

  test('Set slider value', async () => {
    await sliderPage.setSliderValue('3');
    await expect(sliderPage.sliderValue).toHaveText('3');
  });
});
