const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Pet = require("./../models/models");

router.get("/", (req, res) => {
  res.send("Router is working");
});

router.get("/post", (req, res) => {
  res.render("home");
});

router.post("/post", (req, res) => {
  const pet = new Pet({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    age: req.body.age,
  });
  pet
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));

  res.render("home", { name: pet.name, age: pet.age });
});

module.exports = router;
