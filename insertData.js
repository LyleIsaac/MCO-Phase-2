const mongoose = require('mongoose');
const User = require('./models/user');
const Review = require('./models/review');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/food-delight', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check DB connection
mongoose.connection.on('connected', async () => {
  console.log('Connected to MongoDB');

  // Initial Data
  const users = [
    { username: 'user1', password: 'password1', avatar: 'avatar1.jpg', description: 'User 1 Description' },
    { username: 'user2', password: 'password2', avatar: 'avatar2.jpg', description: 'User 2 Description' },
  ];

  const userDocs = await User.insertMany(users);

  const reviews = [
    { restaurantName: "Perico's", rating: 4, content: "Great food!", author: userDocs[0]._id },
    { restaurantName: "Kitchen City", rating: 3, content: "Good food!", author: userDocs[0]._id },
    { restaurantName: "24 Chicken", rating: 5, content: "Excellent food!", author: userDocs[1]._id },
    { restaurantName: "Ate Rica's Bacsilog", rating: 4, content: "Delicious food!", author: userDocs[1]._id },
    { restaurantName: "Potato Corner", rating: 3, content: "Tasty fries!", author: userDocs[0]._id },
  ];

  await Review.insertMany(reviews);

  console.log('Data inserted successfully');
  mongoose.connection.close();
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});
