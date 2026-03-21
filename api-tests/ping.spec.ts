import { expect, test } from '@playwright/test';

test.describe('Ping - HealthCheck', () => {
  test('GET /ping should return 201', async ({ request }) => {
    const response = await request.get('/ping');

    expect(response.status()).toBe(201);
  });
});
