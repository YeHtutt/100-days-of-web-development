const express = require("express");
const mongodb = require("mongodb");

const db = require("../data/database");
const ObjectId = mongodb.ObjectId;

const router = express.Router();

router.get("/", function (req, res) { 
  res.redirect("/posts");
});

//Render or display all Posts
router.get("/posts", async function (req, res) {
  //fetch all posts from mongodb backend
  const posts = await db
    .getDb()
    .collection("posts")
    .find({})
    .project({ title: 1, summary: 1, "author.name": 1 })
    .toArray();
  res.render("posts-list", { posts: posts });
});

//GET the create post webpage to insert the Form Datas
router.get("/new-post", async function (req, res) {
  const authors = await db.getDb().collection("authors").find().toArray();
  // console.log(authors);
  res.render("create-post", { authors: authors });
});

//Insert A Blog Post, write to the MongodB this new Post Object datas -> newPost
router.post("/posts", async function (req, res) {
  const authorId = new ObjectId(req.body.author);
  const author = await db
    .getDb()
    .collection("authors")
    .findOne({ _id: authorId }); //fetch the one author with the id

  const newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email,
    },
  };

  //insert a newPost from client to the mongodb-backend to a new collection "posts"
  const result = await db.getDb().collection("posts").insertOne(newPost);
  console.log(result);
  res.redirect("/posts");
});

//View or display a single post
router.get("/posts/:id", async function (req, res) {
  const postId = req.params.id;
  const post = await db
    .getDb()
    .collection("posts")
    .findOne({ _id: new ObjectId(postId) }, { summary: 0 });
  if (!post) {
    return res.status(404).render("404");
  }

  //Returns a string containing a language-sensitive representation of the date portion (without the time) of a Date object.
  post.humanReadableDate = post.date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  post.date = post.date.toISOString();
  //Show the detail of a single post
  res.render("post-detail", { post: post });
});

//GET the Edit-Form blog-post page to edit the chosen blog post
router.get("/posts/:id/edit", async function (req, res) {
  const postId = req.params.id;
  const post = await db
    .getDb()
    .collection("posts")
    .findOne({ _id: new ObjectId(postId) });

  res.render("update-post", { post: post });
});

//POST The Edit-Form blog-post page with the new inserted data to update the Mongodb
router.post("/posts/:id/edit", async function (req, res) {
  const postId = req.params.id;
  const result = await db
    .getDb()
    .collection("posts")
    .updateOne(
      { _id: new ObjectId(postId) },
      {
        $set: {
          title: req.body.title,
          summary: req.body.summary,
          body: req.body.content,
        },
      },
    );

  res.redirect("/posts");
});

//delete one post
router.get("/posts/:id/delete", async function (req, res) {
  const postId = new ObjectId(req.params.id);
  const result = await db
    .getDb()
    .collection("posts")
    .deleteOne({ _id: postId });

  res.redirect("/posts");
});

module.exports = router;
