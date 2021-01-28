if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Pet = require("./../models/models");

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/post", (req, res) => {
  const { name, age } = req.body;
  const pet = new Pet({
    _id: new mongoose.Types.ObjectId(),
    name,
    age,
  });
  pet
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));

  res.render("home", { name, age });
});

app.get("/*", (req, res) => {
  res.send("404 There is nothing here");
});

module.exports = router;
