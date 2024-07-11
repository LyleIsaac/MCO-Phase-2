const express = require('express');
const Review = require('../models/review');
const Comment = require('../models/comment');
const router = express.Router();

router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find().populate('author');
        res.json(reviews);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/reviews', async (req, res) => {
    try {
        const { restaurantName, rating, content, author } = req.body;
        const review = new Review({ restaurantName, rating, content, author });
        await review.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/comments', async (req, res) => {
    try {
        const { content, author, review } = req.body;
        const comment = new Comment({ content, author, review });
        await comment.save();
        res.redirect(`/reviews/${review}`);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
