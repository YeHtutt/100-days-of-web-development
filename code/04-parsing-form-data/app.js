const fs = require('fs');
const path = require('path');

const express = require('express');
const { readFileSync } = require('fs');

const app = express();

//built-in middleware function which allows to serve static files (like images, HTML, CSS, and JavaScript) directly to the client
app.use(express.static('public')); 

// middleware function, which encodes all the formDatas and convert them into JS-object
app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(htmlFilePath);
});

app.get('/restaurants', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
    res.sendFile(htmlFilePath);
});

app.get('/about', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'about.html');
    res.sendFile(htmlFilePath);
});

app.get('/recommend', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
    res.sendFile(htmlFilePath);
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
    const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
    res.sendFile(htmlFilePath);
})



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});