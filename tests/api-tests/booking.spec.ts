import { APIRequestContext, expect, test } from '@playwright/test';

// Shared booking payload
const newBooking = {
  firstname: 'Jim',
  lastname: 'Brown',
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: '2026-01-01',
    checkout: '2026-06-01',
  },
  additionalneeds: 'Breakfast',
};

async function getAuthToken(request: APIRequestContext): Promise<string> {
  const response = await request.post('/auth', {
    data: { username: 'admin', password: 'password123' },
  });
  const body = await response.json();
  return body.token;
}

async function createBooking(request: APIRequestContext) {
  const response = await request.post('/booking', { data: newBooking });
  return response.json();
}

test.describe('Booking - GetBookingIds', () => {
  test('GET /booking should return a list of booking ids', async ({
    request,
  }) => {
    const response = await request.get('/booking');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('bookingid');
  });

  test('GET /booking with firstname and lastname filter should return filtered results', async ({
    request,
  }) => {
    // Create a booking first to ensure data exists
    await createBooking(request);

    const response = await request.get('/booking', {
      params: {
        firstname: newBooking.firstname,
        lastname: newBooking.lastname,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test('GET /booking with checkin/checkout date filter should return filtered results', async ({
    request,
  }) => {
    const response = await request.get('/booking', {
      params: {
        checkin: '2025-01-01',
        checkout: '2027-01-01',
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
  });
});

test.describe('Booking - GetBooking', () => {
  test('GET /booking/:id should return booking details', async ({
    request,
  }) => {
    const created = await createBooking(request);

    const response = await request.get(`/booking/${created.bookingid}`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.firstname).toBe(newBooking.firstname);
    expect(body.lastname).toBe(newBooking.lastname);
    expect(body.totalprice).toBe(newBooking.totalprice);
    expect(body.depositpaid).toBe(newBooking.depositpaid);
    expect(body.bookingdates.checkin).toBe(newBooking.bookingdates.checkin);
    expect(body.bookingdates.checkout).toBe(newBooking.bookingdates.checkout);
    expect(body.additionalneeds).toBe(newBooking.additionalneeds);
  });

  test('GET /booking/:id with non-existent id should return 404', async ({
    request,
  }) => {
    const response = await request.get('/booking/9999999');

    expect(response.status()).toBe(404);
  });
});

test.describe('Booking - CreateBooking', () => {
  test('POST /booking should create a new booking', async ({ request }) => {
    const response = await request.post('/booking', { data: newBooking });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('bookingid');
    expect(typeof body.bookingid).toBe('number');
    expect(body.booking.firstname).toBe(newBooking.firstname);
    expect(body.booking.lastname).toBe(newBooking.lastname);
    expect(body.booking.totalprice).toBe(newBooking.totalprice);
    expect(body.booking.depositpaid).toBe(newBooking.depositpaid);
    expect(body.booking.bookingdates.checkin).toBe(
      newBooking.bookingdates.checkin,
    );
    expect(body.booking.bookingdates.checkout).toBe(
      newBooking.bookingdates.checkout,
    );
    expect(body.booking.additionalneeds).toBe(newBooking.additionalneeds);
  });
});

test.describe('Booking - UpdateBooking', () => {
  test('PUT /booking/:id should update the booking', async ({ request }) => {
    const created = await createBooking(request);
    const token = await getAuthToken(request);

    const updatedData = {
      firstname: 'James',
      lastname: 'Updated',
      totalprice: 222,
      depositpaid: false,
      bookingdates: {
        checkin: '2026-03-01',
        checkout: '2026-09-01',
      },
      additionalneeds: 'Lunch',
    };

    const response = await request.put(`/booking/${created.bookingid}`, {
      data: updatedData,
      headers: {
        Cookie: `token=${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.firstname).toBe(updatedData.firstname);
    expect(body.lastname).toBe(updatedData.lastname);
    expect(body.totalprice).toBe(updatedData.totalprice);
    expect(body.depositpaid).toBe(updatedData.depositpaid);
    expect(body.additionalneeds).toBe(updatedData.additionalneeds);
  });
});

test.describe('Booking - PartialUpdateBooking', () => {
  test('PATCH /booking/:id should partially update the booking', async ({
    request,
  }) => {
    const created = await createBooking(request);
    const token = await getAuthToken(request);

    const partialUpdate = {
      firstname: 'Patched',
      totalprice: 999,
    };

    const response = await request.patch(`/booking/${created.bookingid}`, {
      data: partialUpdate,
      headers: {
        Cookie: `token=${token}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.firstname).toBe(partialUpdate.firstname);
    expect(body.totalprice).toBe(partialUpdate.totalprice);
    // Unchanged fields should remain
    expect(body.lastname).toBe(newBooking.lastname);
    expect(body.depositpaid).toBe(newBooking.depositpaid);
  });
});

test.describe('Booking - DeleteBooking', () => {
  test('DELETE /booking/:id should delete the booking', async ({ request }) => {
    const created = await createBooking(request);
    const token = await getAuthToken(request);

    const deleteResponse = await request.delete(
      `/booking/${created.bookingid}`,
      {
        headers: {
          Cookie: `token=${token}`,
        },
      },
    );

    expect(deleteResponse.status()).toBe(201);

    // Verify it's deleted
    const getResponse = await request.get(`/booking/${created.bookingid}`);
    expect(getResponse.status()).toBe(404);
  });

  test('DELETE /booking/:id without auth should return 403', async ({
    request,
  }) => {
    const created = await createBooking(request);

    const response = await request.delete(`/booking/${created.bookingid}`, {
      headers: {
        Cookie: '',
      },
    });

    expect(response.status()).toBe(403);
  });
});
