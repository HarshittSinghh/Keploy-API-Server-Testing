const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Book = require('../../models/book');

let bookId;

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/BookStore');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Book API', () => {
  it('POST /books - should create a book', async () => {
    const res = await request(app).post('/books').send({
      title: 'API Book',
      author: 'API Tester',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('API Book');
    bookId = res.body._id; // Save for later use
  });

  it('GET /books - should fetch all books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('PUT /books/:id - should update the book', async () => {
    const res = await request(app).put(`/books/${bookId}`).send({
      title: 'Updated Book Title',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Book Title');
  });

  it('DELETE /books/:id - should delete the book', async () => {
    const res = await request(app).delete(`/books/${bookId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/deleted/i);
  });
});
