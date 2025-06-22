const bookController = require('../../controllers/bookController');
const Book = require('../../models/book');

jest.mock('../../models/book');

describe('Book Controller - Unit', () => {
  test('should create a book successfully', async () => {
    const req = { body: { title: 'Test Book', author: 'Tester' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Book.create.mockResolvedValue({ title: 'Test Book', author: 'Tester' });

    await bookController.createBook(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ title: 'Test Book' }));
  });
});
