const mongoose = require('mongoose');
const Book = require('../../models/book');

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/BookStore");
});

afterAll(async () => {
  await mongoose.connection.dropDatabase(); 
  await mongoose.connection.close();
});

describe('DB Integration', () => {
  it('should save a book to the database', async () => {
    const book = new Book({ title: 'Integration Book', author: 'Author' });
    const savedBook = await book.save();

    expect(savedBook._id).toBeDefined();
    expect(savedBook.title).toBe('Integration Book');
  });
});
