const { Router } = require("express");
const Image = require("../models").image;

// Instanciate a router
const router = new Router();

// get all images
router.get("/", async (req, res, next) => {
  try {
    const images = await Image.findAll();

    // respond with the image data
    res.json(images);
  } catch (e) {
    next(error);
  }
});

// create image
router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { url, title } = req.body;

  if (!url || !title) {
    res.status(406).send("missing parameters")
  }
  // create a new image
  const newImage = await Image.create({ title, url });
  res.json(newImage);
});

// image by id
router.get("/:id", (req, res, next) => {
  // get id param
  const { id } = req.params;
  console.log("id", id);

  try {
    // Find image by id
    const image = await Image.findByPk(id);
    // check if image exists
    if (!image) {
      res.status(404).send("No image found")
    } else {
      // send it back
      res.json(image);
    }
  } catch (e) {
    next(e)
  }
})  

module.exports = router;
