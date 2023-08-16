const express = require("express");
const router = express.Router();
const Message = require("../models/message");
const messages = [];

/* GET home page. */
router.get("/", async function (req, res, next) {
  const dbMessages = await Message.find();
  if (!messages.length && dbMessages.length) {
    dbMessages.forEach((msg) => messages.push(msg));
  }

  res.render("index", { title: "Mini Message Board", messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", async (req, res) => {
  const { name, message } = req.body;
  const newMessage = { text: message, user: name, added: new Date() };
  const messageDoc = new Message(newMessage);
  await messageDoc.save();
  messages.push(newMessage);

  res.redirect("/");
});

module.exports = router;
