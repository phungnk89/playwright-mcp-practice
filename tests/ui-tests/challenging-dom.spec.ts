import { expect, test } from '@playwright/test';
import { ChallengingDomPage, HerokuHomePage } from '@objects';

test.describe('Challenging DOM', () => {
  let homePage: HerokuHomePage;
  let challengingDomPage: ChallengingDomPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Challenging DOM');
    challengingDomPage = new ChallengingDomPage(page);
  });

  test('Navigate to Challenging DOM page and verify elements', async ({
    page,
  }) => {
    await expect(page).toHaveURL(/\/challenging_dom/);
    await expect(challengingDomPage.heading).toBeVisible({ timeout: 10000 });
    await expect(challengingDomPage.buttons).toHaveCount(3);
    await expect(challengingDomPage.table).toBeVisible({ timeout: 10000 });
    await expect(challengingDomPage.tableRows).toHaveCount(10);
    await expect(challengingDomPage.canvas).toBeVisible({ timeout: 10000 });
  });

  test('Click each button and verify the button texts change', async ({
    page,
  }) => {
    for (let i = 0; i < 3; i++) {
      await challengingDomPage.clickButton(i);
      await page.waitForTimeout(500);
      const texts = await challengingDomPage.getButtonTexts();
      expect(texts.length).toBe(3);
    }
  });

  test('Table and canvas remain after clicking all buttons', async () => {
    for (let i = 0; i < 3; i++) {
      await challengingDomPage.clickButton(i);
    }
    await expect(challengingDomPage.table).toBeVisible({ timeout: 10000 });
    await expect(challengingDomPage.tableRows).toHaveCount(10);
    await expect(challengingDomPage.canvas).toBeVisible({ timeout: 10000 });
  });
});
