const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const router = require("./routes/routes.js");

const { PORT, MONGODB_URI } = process.env;

// Production
// const uri =
//   "mongodb+srv://Sean:" +
//   process.env.MONGODB_URI +
//   "@cluster0.xuroh.mongodb.net/pets?retryWrites=true&w=majority";
const URI = MONGODB_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/routes", router);

app.get("/", (req, res) => {
  const name = "Sean";
  res.render("home", { name });
});

app.get("/*", (req, res) => {
  res.send("404 There is nothing here");
});

app.listen(
  PORT || 5000,
  console.log("Server running at http://localhost:5000")
);
