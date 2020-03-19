// import the router class from express
const { Router } = require("express");
const { toData } = require("../auth/jwt");
const Image = require("../models").image;
const authMiddleware = require("../auth/middleware");

// Instantiate a router.
const router = new Router();

// get all images
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    console.log("GOT TO THE ROUTE!!");
    console.log("Whos making this request??", req.user.fullName);
    const images = await Image.findAll();

    // respond with the images data
    res.json(images);
  } catch (error) {
    next(error);
  }
});

// create a new image!
router.post("/", async (req, res, next) => {
  const { url, title } = req.body;
  if (!url || !title) {
    res.status(406).send("missing parameters");
  } else {
    const newImage = await Image.create({ title, url });
    res.json(newImage);
  }
});

// get image by id
router.get("/:id", async (req, res, next) => {
  // => '/images/:id'

  // get id param
  const { id } = req.params;
  console.log("id", id);
  try {
    const image = await Image.findByPk(id);
    // check if image exists
    if (!image) {
      res.status(404).send("No image found");
    } else {
      res.json(image);
    }
  } catch (error) {
    next(error);
  }
  // findByPk

  // send it back
});

module.exports = router;
