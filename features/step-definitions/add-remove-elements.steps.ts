import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AddRemoveElementsPage } from '@objects';
import { PlaywrightWorld } from '@support/world';

Then(
  'the Add\\/Remove Elements heading should show {string}',
  async function (this: PlaywrightWorld, text: string) {
    const addRemovePage = new AddRemoveElementsPage(this.page);
    await expect(addRemovePage.heading).toHaveText(
      new RegExp(text.replace(/\//g, '\\/')),
    );
  },
);

Then(
  'the Add Element button should be visible',
  async function (this: PlaywrightWorld) {
    const addRemovePage = new AddRemoveElementsPage(this.page);
    await expect(addRemovePage.addButton).toBeVisible({ timeout: 10000 });
  },
);

Then(
  'there should be {int} delete buttons',
  async function (this: PlaywrightWorld, count: number) {
    const addRemovePage = new AddRemoveElementsPage(this.page);
    await expect(addRemovePage.deleteButtons).toHaveCount(count);
  },
);

Then(
  'the first delete button should be visible',
  async function (this: PlaywrightWorld) {
    const addRemovePage = new AddRemoveElementsPage(this.page);
    await expect(addRemovePage.deleteButtons.first()).toBeVisible({
      timeout: 10000,
    });
  },
);

When('I click the Add Element button', async function (this: PlaywrightWorld) {
  const addRemovePage = new AddRemoveElementsPage(this.page);
  await addRemovePage.clickAddElement();
});

When('I click the Delete button', async function (this: PlaywrightWorld) {
  const addRemovePage = new AddRemoveElementsPage(this.page);
  await addRemovePage.clickDeleteElement();
});
