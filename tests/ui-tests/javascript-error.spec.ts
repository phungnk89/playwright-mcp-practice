import { expect, test } from '@playwright/test';
import { HerokuHomePage } from '@objects';

test.describe('JavaScript Error', () => {
  test('Navigate to JavaScript Error page and detect error', async ({
    page,
  }) => {
    const jsErrors: string[] = [];
    page.on('pageerror', (error) => {
      jsErrors.push(error.message);
    });
    const homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('JavaScript onload event error');
    await page.waitForTimeout(2000);
    expect(jsErrors.length).toBeGreaterThan(0);
  });
});
