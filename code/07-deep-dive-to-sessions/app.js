const path = require('path');

const express = require('express');
const session = require('express-session');
const mongdbStore = require('connect-mongodb-session');

const MongoDBStore = mongdbStore(session);

const sessionStore = new MongoDBStore({
  uri: 'mongodb://localhost:27017', //running mongodb-database
  databaseName: 'auth-demo',
  connection: 'sessions'
})

const db = require('./data/database');
const demoRoutes = require('./routes/demo');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'super-secret',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    maxAge: 30 * 24 * 60 * 60* 1000 // 30 days in MilliSec
  }
}))

app.use(demoRoutes);

app.use(function(error, req, res, next) {
  res.render('500');
})

db.connectToDatabase().then(function () {
  app.listen(3000);
});
