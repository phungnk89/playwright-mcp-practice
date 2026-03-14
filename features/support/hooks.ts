import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
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

After(async function (this: PlaywrightWorld) {
  await this.cleanup();
});
