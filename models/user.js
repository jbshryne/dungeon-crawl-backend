const mongoose = require("../db/connection");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // games: [
  //     {
  //     type: Schema.Types.ObjectId,
  //     ref: "Game",
  //     },
  // ],
});

const User = model("User", userSchema);

module.exports = User;
