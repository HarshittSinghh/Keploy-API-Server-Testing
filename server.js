// server.js
const mongoose = require('mongoose');
const app = require('./app');

const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/BookStore';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
