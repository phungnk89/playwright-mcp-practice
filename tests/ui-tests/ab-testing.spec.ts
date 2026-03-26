import { expect, test } from '@playwright/test';
import { ABTestPage, HerokuHomePage } from '@objects';

test.describe('A/B Testing', () => {
  let homePage: HerokuHomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
  });

  test('Navigate to A/B Test page from homepage', async ({ page }) => {
    await expect(homePage.heading).toBeVisible({ timeout: 10000 });
    await homePage.clickExample('A/B Testing');
    await expect(page).toHaveURL(/\/abtest/);
    const abTestPage = new ABTestPage(page);
    await expect(abTestPage.heading).toBeVisible({ timeout: 10000 });
    await expect(abTestPage.heading).toHaveText(
      /A\/B Test Control|A\/B Test Variation 1/,
    );
  });

  test('Display description on A/B Test page', async ({ page }) => {
    await homePage.clickExample('A/B Testing');
    const abTestPage = new ABTestPage(page);
    await expect(abTestPage.description).toBeVisible({ timeout: 10000 });
    await expect(abTestPage.description).toContainText('split testing');
  });
});
