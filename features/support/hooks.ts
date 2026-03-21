import { After, Before, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { PlaywrightWorld } from './world';

setDefaultTimeout(60000);

Before(async function (this: PlaywrightWorld) {
  await this.init();
});

Before({ tags: '@basic-auth' }, async function (this: PlaywrightWorld) {
  await this.cleanup();
  await this.init({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },
  });
});

Before({ tags: '@digest-auth' }, async function (this: PlaywrightWorld) {
  await this.cleanup();
  await this.init({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },
  });
});

Before({ tags: '@secure-download' }, async function (this: PlaywrightWorld) {
  await this.cleanup();
  await this.init({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },
  });
});

After(async function (this: PlaywrightWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    this.attach(screenshot, 'image/png');
  }
  await this.cleanup();
});
