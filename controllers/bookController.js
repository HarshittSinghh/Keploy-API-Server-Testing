const Book = require('../models/book');

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create book' });
  }
};

module.exports = {
  createBook,
};
