const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/signup", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email; //userData['email]
  const enteredConfirmEmail = userData["confirm-email"];
  const enteredPassword = userData.password;

  const hashedPassword = await bcrypt.hash(enteredPassword, 12);

  if (
    !enteredEmail ||
    !enteredConfirmEmail ||
    !enteredPassword ||
    enteredPassword.trim().length < 6 ||
    enteredEmail !== enteredConfirmEmail ||
    !enteredEmail.includes("@")
  ) {
    console.log("Incorrect data");
    return res.redirect("/signup");
  }

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (existingUser) {
    console.log("user exists already. Please signup with another user credentials!",);
    return res.redirect("/signup");
  }

  const user = {
    email: enteredEmail,
    password: hashedPassword,
  };

  await db.getDb().collection("users").insertOne(user);

  res.redirect("/login");
});

router.post("/login", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (!existingUser) {
    //user not found
    console.log("Could not log in!");
    return res.redirect("/login"); //stop next function exectution and redirect to login page
  }

  const passwordsAreEqual = await bcrypt.compare(
    enteredPassword,
    existingUser.password,
  );

  if (!passwordsAreEqual) {
    //passwords are not equal
    console.log("Could not log in - passwords are not equal!");
    return res.redirect("/login"); //stop next function exectution and redirect to login page
  }

  //User is authenticated
  req.session.user = { id: existingUser._id.toString(), email: existingUser.email };
  req.session.isAuthenticated = true;
  req.session.save(function() {
    res.redirect('/admin');
  });
});

router.get("/admin", function (req, res) {
  if(!req.session.isAuthenticated) { 
    return res.status(401).render('401'); //access was denined
  }
  res.render("admin");
});

router.post("/logout", function (req, res) {});

module.exports = router;
