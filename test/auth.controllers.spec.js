const request = require('supertest');

const { app } = require('../src/server');

describe('Auth API', () => {
  it('[positive]should register user', async () => {
    const res = await request(app).post('/api/register').send({
      fullName: 'hello',
      email: 'hello@gmail.com',
      password: '12345678',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('success register user');
  });

  it('[negative]should register already user', async () => {
    const res = await request(app).post('/api/register').send({
      fullName: 'hello',
      email: 'hello@gmail.com',
      password: '12345678',
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('email already exists');
  });

  it('[positive]should login user', async () => {
    const res = await request(app).post('/api/login').send({
      fullName: 'hello',
      email: 'hello@gmail.com',
      password: '12345678',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('user success login');
  });
});
