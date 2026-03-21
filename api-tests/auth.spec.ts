import { expect, test } from '@playwright/test';

test.describe('Auth - CreateToken', () => {
  test('POST /auth with valid credentials should return a token', async ({
    request,
  }) => {
    const response = await request.post('/auth', {
      data: {
        username: 'admin',
        password: 'password123',
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('token');
    expect(typeof body.token).toBe('string');
    expect(body.token.length).toBeGreaterThan(0);
  });

  test('POST /auth with invalid credentials should not return a token', async ({
    request,
  }) => {
    const response = await request.post('/auth', {
      data: {
        username: 'invaliduser',
        password: 'wrongpassword',
      },
    });

    const body = await response.json();
    expect(body).toHaveProperty('reason', 'Bad credentials');
  });
});
