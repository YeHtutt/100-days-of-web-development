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

  if (!existingUser) { //user not found
    console.log("Could not log in!");
    return res.redirect("/login"); //stop next function exectution and redirect to login page
  }

  const passwordsAreEqual = await bcrypt.compare(
    enteredPassword,
    existingUser.password,
  );

  if(!passwordsAreEqual) { //passwords are not equal
    console.log('Could not log in - passwords are not equal!');
    return res.redirect('/login'); //stop next function exectution and redirect to login page
  }

  console.log('User is authenticated');
  res.redirect('/admin');
});

router.get("/admin", function (req, res) {
  res.render("admin");
});

router.post("/logout", function (req, res) {});

module.exports = router;
