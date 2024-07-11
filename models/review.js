const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    restaurantName: { type: String, required: true },
    rating: { type: Number, required: true },
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Review', reviewSchema);
