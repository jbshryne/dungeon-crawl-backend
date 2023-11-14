const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  let userToLogin = await User.findOne({ username: req.body.username });

  if (userToLogin) {
    bcrypt.compare(req.body.password, userToLogin.password, (err, result) => {
      if (result) {
        req.session.userId = userToLogin._id;
        req.session.username = userToLogin.username;
        res.redirect("/game");
      } else {
        res.send("wrong password");
      }
    });
  }
});

router.post("/signup", async (req, res) => {
  if (req.body.username && req.body.password) {
    bcrypt.hash(req.body.password, 10, async (err, hashed) => {
      req.body.password = hashed;

      await User.create(req.body);
      res.redirect("/auth");
    });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
