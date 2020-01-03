const Router = require("express").Router;
const Image = require("../models").Image;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const allImages = await Image.findAll();
    res.json(allImages);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
