const path = require('path');

const express = require('express');
const session = require('express-session');
const mongdbStore = require('connect-mongodb-session');
const { ObjectId } = require('mongodb');

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
}));

/**
 * Middleware with res.locals for authentication and authorization
 * The values of Session object were used for finding out user's status
 */
app.use(async function(req, res, next) {
  const user = req.session.user;
  const isAuth = req.session.isAuthenticated;

  if(!user || !isAuth) {
    return next();
  }

  const userDoc = await db.getDb().collection('users').findOne({_id: ObjectId.createFromHexString(user.id)});

  const isAdmin = userDoc.isAdmin;

  //res.locals are visible for all pages
  res.locals.isAuth = isAuth;
  res.locals.isAdmin = isAdmin;

  next();
})

app.use(demoRoutes);

app.use(function(error, req, res, next) {
  res.render('500');
})

db.connectToDatabase().then(function () {
  app.listen(3000);
});
