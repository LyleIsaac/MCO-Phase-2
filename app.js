const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/food-delight', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check DB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const reviewRouter = require('./routes/review');

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/review', reviewRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
