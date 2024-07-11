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

// Define models (example)
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String,
  avatar: String,
  description: String,
}));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.post('/register', async (req, res) => {
  const { username, password, avatar, description } = req.body;
  const user = new User({ username, password, avatar, description });
  await user.save();
  res.redirect('/');
});

// Add other routes similarly

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
