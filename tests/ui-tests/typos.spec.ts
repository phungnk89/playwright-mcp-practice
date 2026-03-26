import { expect, test } from '@playwright/test';
import { HerokuHomePage, TyposPage } from '@objects';

test.describe('Typos', () => {
  let homePage: HerokuHomePage;
  let typosPage: TyposPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Typos');
    typosPage = new TyposPage(page);
  });

  test('Navigate to Typos page', async ({ page }) => {
    await expect(page).toHaveURL(/\/typos/);
    await expect(typosPage.heading).toBeVisible({ timeout: 10000 });
  });

  test('Verify page content is present', async () => {
    await expect(typosPage.content).toContainText(
      "Sometimes you'll see a typo",
    );
  });
});
