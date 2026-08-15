const path = require('path');

const express = require('express');

const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

const app = express();

app.set('views', path.join(__dirname, 'views')); //Where are the EJS-template (earlier HTMLs)
app.set('view engine', 'ejs'); //use for the template enginee - ejs Files, with extension .ejs

//built-in middleware function which allows to serve static files (like images, HTML, CSS, and JavaScript) directly to the client
app.use(express.static('public')); 

// middleware function, which encodes all the formDatas and convert them into JS-object
app.use(express.urlencoded({extended: false}));


app.use('/', defaultRoutes); //use the express router middleware for the defaultRoutes
app.use('/', restaurantRoutes);

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