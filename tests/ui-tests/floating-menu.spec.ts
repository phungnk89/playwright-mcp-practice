import { expect, test } from '@playwright/test';
import { FloatingMenuPage, HerokuHomePage } from '@objects';

test.describe('Floating Menu', () => {
  let homePage: HerokuHomePage;
  let floatingMenuPage: FloatingMenuPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Floating Menu');
    floatingMenuPage = new FloatingMenuPage(page);
  });

  test('Navigate to Floating Menu page', async ({ page }) => {
    await expect(page).toHaveURL(/\/floating_menu/);
    await expect(floatingMenuPage.heading).toBeVisible({ timeout: 10000 });
    await expect(floatingMenuPage.menu).toBeVisible({ timeout: 10000 });
  });

  test('Verify menu items', async () => {
    await expect(floatingMenuPage.menuItems).toHaveCount(4);
    const texts = await floatingMenuPage.getMenuTexts();
    expect(texts).toContain('Home');
    expect(texts).toContain('News');
    expect(texts).toContain('Contact');
    expect(texts).toContain('About');
  });
});
