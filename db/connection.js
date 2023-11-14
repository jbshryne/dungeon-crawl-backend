const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${process.env.DATABASE_URL}`);
});

mongoose.connection.on("error", () => {
  console.log(`Mongoose connected error ${err}`);
});

module.exports = mongoose;
