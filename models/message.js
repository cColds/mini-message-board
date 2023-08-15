const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const MessageSchema = new Schema({
  text: { type: String, required: true },
  user: { type: String, required: true },
  added: { type: Date, required: true },
});

const Message = model("message", MessageSchema);

module.exports = Message;
