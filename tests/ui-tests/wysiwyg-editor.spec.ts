import { expect, test } from '@playwright/test';
import { HerokuHomePage, WYSIWYGEditorPage } from '@objects';

test.describe('WYSIWYG Editor', () => {
  let homePage: HerokuHomePage;
  let editorPage: WYSIWYGEditorPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('WYSIWYG Editor');
    editorPage = new WYSIWYGEditorPage(page);
  });

  test('Navigate to WYSIWYG Editor page', async ({ page }) => {
    await expect(page).toHaveURL(/\/tinymce/);
    await expect(editorPage.heading).toBeVisible({ timeout: 10000 });
  });
});
