const path = require('path');

const express = require('express');
const uuid = require('uuid');

const resData = require('./util/restaurant-data');

const app = express();

app.set('views', path.join(__dirname, 'views')); //Where are the EJS-template (earlier HTMLs)
app.set('view engine', 'ejs'); //use for the template enginee - ejs Files, with extension .ejs

//built-in middleware function which allows to serve static files (like images, HTML, CSS, and JavaScript) directly to the client
app.use(express.static('public')); 

// middleware function, which encodes all the formDatas and convert them into JS-object
app.use(express.urlencoded({extended: false}));


app.get('/', function(req, res) {
    res.render('index');
});

app.get('/restaurants', function(req, res) {
    const restaurants = resData.getStoredRestaurants();

    res.render('restaurants', { 
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants
    });
});

//dynamic Route
app.get('/restaurants/:id', function(req, res) {
    const restaurantId = req.params.id;
    const restaurants = resData.getStoredRestaurants();

    for(const restaurant of restaurants) {
        if(restaurant.id === restaurantId) {
            return res.render('restaurant-detail', { restaurant : restaurant });
        }
    }

    res.status(404).render('404');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/recommend', function(req, res) {
    res.render('recommend');
});

app.post('/recommend', function(req, res) {
    const restaurant = req.body;
    restaurant.id = uuid.v4(); //uuid.v4() will give a good random generated unique id

    const restaurants = resData.getStoredRestaurants();
    restaurants.push(restaurant);

    resData.storeRestaurants(restaurants);

    res.redirect('/confirm');
});

app.get('/confirm', function(req, res) {
    res.render('confirm');
});

// 404 middleware(url not found). This is executed when the requested page cannot be handled by any of the routes above.
app.use(function (req, res) {
    res.status(404).render('404');
});

// Error-handling middleware. This catches any server-side errors that occur in the application and renders the custom 500 error page.
app.use(function(error, req, res, next){
    res.status(500).render('500');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});