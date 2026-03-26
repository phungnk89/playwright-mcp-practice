import { expect, test } from '@playwright/test';
import { HerokuHomePage, ShadowDomPage } from '@objects';

test.describe('Shadow DOM', () => {
  let homePage: HerokuHomePage;
  let shadowDomPage: ShadowDomPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Shadow DOM');
    shadowDomPage = new ShadowDomPage(page);
  });

  test('Navigate to Shadow DOM page', async ({ page }) => {
    await expect(page).toHaveURL(/\/shadowdom/);
    await expect(shadowDomPage.heading).toBeVisible({ timeout: 10000 });
  });

  test('Verify shadow DOM content', async () => {
    const content = await shadowDomPage.getShadowContent();
    expect(content).toContain("Let's have some different text!");
  });
});
