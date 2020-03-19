const { Router } = require("express");
const Image = require("../models").image;

// Instanciate a router
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    // get all images
    const images = await Image.findAll();

    // respond with the image data
    res.json(images);
  } catch (e) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { url, title } = req.body;
  // create a new image
  const newImage = await Image.create({ title, url });
  res.json(newImage);
});

module.exports = router;
