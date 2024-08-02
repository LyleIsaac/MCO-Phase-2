const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const upload = require('../middleware/upload');
const bcrypt = require('bcryptjs');

// Handle registration
router.post('/register', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.render('register', { msg: err });
        } else {
            const { username, password, description, is_restaurant } = req.body;
            const avatar = req.file ? `/uploads/${req.file.filename}` : null;

            if (!avatar) {
                return res.render('register', { msg: 'Please upload an avatar' });
            }

            // Hash password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;

                    const newUser = new User({
                        username,
                        password: hash,
                        avatar,
                        description,
                        isRestaurant: is_restaurant ? true : false
                    });

                    newUser.save()
                        .then(user => res.redirect('/login'))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// Existing route for the index page
router.get('/', (req, res) => {
    const locals = { 
        title: "Food Delight - DLSU Food Stores Review", 
        Description: "Nodejs, express, mongodb - web app"
    };
    res.render('index', { locals });
});

// Define routes
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/editProfile', (req, res) => {
    res.render('editProfile');
});

router.get('/userProfile', (req, res) => {
    res.render('userProfile');
});

// Route for the about page
router.get('/about', (req, res) => {
    res.render('about');
});


// Serve static HTML files from the 'public/html' directory
//router.use('/reviews', express.static('public/html'));

// No need to define individual routes for static files
// Express will serve them from the 'public' directory

;

// Routes for restaurant reviews
router.get('/reviews/24Chicken-review', (req, res) => {
    res.render('reviews/24Chicken-review');
});

router.get('/reviews/bacsilog-review', (req, res) => {
    res.render('reviews/bacsilog-review');
});

router.get('/reviews/fruitas-review', (req, res) => {
    res.render('reviews/fruitas-review');
});

router.get('/reviews/kitchenCity-review', (req, res) => {
    res.render('reviews/kitchenCity-review');
});

router.get('/reviews/pericos-review', (req, res) => {
    res.render('reviews/pericos-review');
});

router.get('/reviews/potatoCorner-review', (req, res) => {
    res.render('reviews/potatoCorner-review');
});

module.exports = router

//app.get('', (req,res) => {
  //  res.send("Hellow world");
//}) 
