import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  retries: 2,
  reporter: [['list'], ['html']],
  projects: [
    {
      name: 'ui',
      testDir: './tests/ui-tests',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://the-internet.herokuapp.com',
        viewport: { width: 1920, height: 1080 },
        headless: true,
        screenshot: 'only-on-failure',
      },
    },
    {
      name: 'api',
      testDir: './tests/api-tests',
      use: {
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    },
  ],
});
