import { expect, test } from '@playwright/test';
import { HerokuHomePage, JQueryUIMenuPage } from '@objects';

test.describe('JQuery UI Menus', () => {
  let homePage: HerokuHomePage;
  let menuPage: JQueryUIMenuPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('JQuery UI Menus');
    menuPage = new JQueryUIMenuPage(page);
  });

  test('Navigate to JQuery UI Menu page', async ({ page }) => {
    await expect(page).toHaveURL(/\/jqueryui\/menu/);
    await expect(menuPage.heading).toBeVisible({ timeout: 10000 });
    await expect(menuPage.menu).toBeVisible({ timeout: 10000 });
  });
});
