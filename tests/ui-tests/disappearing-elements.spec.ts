import { expect, test } from '@playwright/test';
import { DisappearingElementsPage, HerokuHomePage } from '@objects';

test.describe('Disappearing Elements', () => {
  let homePage: HerokuHomePage;
  let disappearingPage: DisappearingElementsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Disappearing Elements');
    disappearingPage = new DisappearingElementsPage(page);
  });

  test('Navigate to Disappearing Elements page', async ({ page }) => {
    await expect(page).toHaveURL(/\/disappearing_elements/);
    await expect(disappearingPage.heading).toBeVisible({ timeout: 10000 });
  });

  test('Verify core navigation links are present', async () => {
    const linkCount = await disappearingPage.navLinks.count();
    expect(linkCount).toBeGreaterThanOrEqual(4);
    const texts = await disappearingPage.getNavTexts();
    expect(texts).toContain('Home');
    expect(texts).toContain('About');
    expect(texts).toContain('Contact Us');
    expect(texts).toContain('Portfolio');
  });
});
