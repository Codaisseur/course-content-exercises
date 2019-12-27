const express = require("express");
const app = express();
const PORT = 4002;

const User = require("./models").User;

app.use(express.json());

app.get("/users/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = await User.findByPk(userId);
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
