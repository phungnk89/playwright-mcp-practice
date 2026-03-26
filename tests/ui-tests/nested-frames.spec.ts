import { expect, test } from '@playwright/test';
import { HerokuHomePage, NestedFramesPage } from '@objects';

test.describe('Nested Frames', () => {
  test('Navigate to Nested Frames and verify frame content', async ({
    page,
  }) => {
    const homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Nested Frames');
    const nestedFramesPage = new NestedFramesPage(page);
    const bottomText = await nestedFramesPage.getBottomFrameText();
    expect(bottomText.trim()).toBe('BOTTOM');
  });
});
