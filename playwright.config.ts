import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './api-tests',
  fullyParallel: true,
  retries: 2,
  reporter: [['list'], ['html', { outputFolder: 'api-test-report' }]],
  use: {
    baseURL: 'https://restful-booker.herokuapp.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
});
