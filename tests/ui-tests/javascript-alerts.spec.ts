import { expect, test } from '@playwright/test';
import { HerokuHomePage, JavaScriptAlertsPage } from '@objects';

test.describe('JavaScript Alerts', () => {
  let homePage: HerokuHomePage;
  let alertsPage: JavaScriptAlertsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('JavaScript Alerts');
    alertsPage = new JavaScriptAlertsPage(page);
  });

  test('Navigate to JavaScript Alerts page', async ({ page }) => {
    await expect(page).toHaveURL(/\/javascript_alerts/);
    await expect(alertsPage.heading).toBeVisible({ timeout: 10000 });
  });

  test('Handle JS Alert', async ({ page }) => {
    page.once('dialog', (dialog) => dialog.accept());
    await alertsPage.jsAlertButton.click();
    await expect(alertsPage.resultText).toContainText(
      'You successfully clicked an alert',
      { timeout: 10000 },
    );
  });

  test('Handle JS Confirm - Accept', async ({ page }) => {
    page.once('dialog', (dialog) => dialog.accept());
    await alertsPage.jsConfirmButton.click();
    await expect(alertsPage.resultText).toContainText('You clicked: Ok', {
      timeout: 10000,
    });
  });

  test('Handle JS Confirm - Dismiss', async ({ page }) => {
    page.once('dialog', (dialog) => dialog.dismiss());
    await alertsPage.jsConfirmButton.click();
    await expect(alertsPage.resultText).toContainText('You clicked: Cancel', {
      timeout: 10000,
    });
  });

  test('Handle JS Prompt', async ({ page }) => {
    page.once('dialog', (dialog) => dialog.accept('Hello'));
    await alertsPage.jsPromptButton.click();
    await expect(alertsPage.resultText).toContainText('You entered: Hello', {
      timeout: 10000,
    });
  });
});
