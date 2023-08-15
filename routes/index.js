const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", (req, res) => {
  const { name, message } = req.body;
  messages.push({ text: message, user: name, added: new Date() });

  res.redirect("/");
});

module.exports = router;
