const express = require("express");
const app = express();
const morgan = require("morgan");

const userRoutes = require("./controllers/userController");
// const gameRoutes = require('./routes/gameRoutes');

const session = require("express-session");
app.use(session({ secret: "badabing", cookie: { maxAge: 3600000 } }));

const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(userRoutes);
// app.use(gameRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
