const express = require('express');
const multer = require('multer');
const User = require('../models/user');
const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/register', upload.single('avatar'), async (req, res) => {
    try {
        const { username, password, description } = req.body;
        const avatar = req.file ? `/img/${req.file.filename}` : '';
        const user = new User({ username, password, avatar, description });
        await user.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (user) {
            // Assuming some session handling here
            res.redirect('/loggedin.html');
        } else {
            res.redirect('/login.html');
        }
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/update_profile', async (req, res) => {
    try {
        const { username, email, bio } = req.body;
        await User.updateOne({ username }, { email, bio });
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
