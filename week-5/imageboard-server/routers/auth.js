const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const User = require("../models").user;

const router = new Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(406).send("Missing parameters");
  } else {
    // find user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(404).send("no user with this email found");
    } else {
      const token = toJWT({ userId: user.id });
      res.json({ token });
    }
    // get users id to generate a token for that user
  }
});

module.exports = router;

// expect an image and password
// if everything is fine, send back a token
