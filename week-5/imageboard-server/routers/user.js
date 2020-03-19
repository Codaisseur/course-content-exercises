const bcrypt = require("bcrypt");
const Router = require("express").Router;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    // get all users
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    // I should check for parameters
    const newUser = await User.create({ email, password, fullName });
    res.json(newUser);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
