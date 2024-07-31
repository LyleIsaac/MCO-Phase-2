require('dotenv').config(); 

const express = require('express'); 
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const mainRoutes = require('./server/routes/main');

const app = express(); 
const PORT = 3000 || process.env.PORT; 

//static files from public dir
app.use(express.static(path.join(__dirname, 'public')));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');

//set view engine to EJS 
app.set('view engine','ejs'); 

app.use('/', require('./server/routes/main'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/editProfile', (req, res) => {
    res.render('editProfile');
});

app.get('/userProfile', (req, res) => {
    res.render('userProfile');
});


//start server
app.listen(PORT, ()=> { 
    console.log(`App listening on port ${PORT}`);
});

