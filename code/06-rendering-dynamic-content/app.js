const fs = require('fs');
const path = require('path');

const express = require('express');
const { readFileSync } = require('fs');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //use ejs as template enginee

//built-in middleware function which allows to serve static files (like images, HTML, CSS, and JavaScript) directly to the client
app.use(express.static('public')); 

// middleware function, which encodes all the formDatas and convert them into JS-object
app.use(express.urlencoded({extended: false}));


app.get('/', function(req, res) {
    res.render('index');
});

app.get('/restaurants', function(req, res) {
    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const restaurants = JSON.parse(fileData);

    res.render('restaurants', { numberOfRestaurants: restaurants.length});
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/recommend', function(req, res) {
    res.render('recommend');
});

app.post('/recommend', function(req, res) {
    const restaurant = req.body;

    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const restaurants = JSON.parse(fileData);

    restaurants.push(restaurant);

    fs.writeFileSync(filePath, JSON.stringify(restaurants));

    res.redirect('/confirm');
});

app.get('/confirm', function(req, res) {
    res.render('confirm');
})



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});