const { Router } = require("express");
const Image = require("../models").image;

const router = new Router();

router.get("/", async (req, res, next) => {
  // get all images
});

router.post("/", async (req, res, next) => {
  // create an image
});

module.exports = router;
