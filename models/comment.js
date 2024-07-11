const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    review: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' }
});

module.exports = mongoose.model('Comment', commentSchema);
