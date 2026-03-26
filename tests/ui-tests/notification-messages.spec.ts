import { expect, test } from '@playwright/test';
import { HerokuHomePage, NotificationMessagePage } from '@objects';

test.describe('Notification Messages', () => {
  let homePage: HerokuHomePage;
  let notificationPage: NotificationMessagePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HerokuHomePage(page);
    await homePage.navigate();
    await homePage.clickExample('Notification Messages');
    notificationPage = new NotificationMessagePage(page);
  });

  test('Navigate to Notification Messages page', async ({ page }) => {
    await expect(page).toHaveURL(/\/notification_message/);
    await expect(notificationPage.heading).toBeVisible({ timeout: 10000 });
    await expect(notificationPage.flashMessage).toBeVisible({ timeout: 10000 });
  });

  test('Load a new notification message', async () => {
    await notificationPage.loadNewMessage();
    await expect(notificationPage.flashMessage).toBeVisible({ timeout: 10000 });
  });
});
