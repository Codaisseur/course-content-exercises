const express = require("express");
const imageRouter = require("./routers/image");

const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
const jsonParser = express.json();
app.use(jsonParser);

// Routers
app.use("/images", imageRouter);

// Start server
app.listen(PORT, () => console.log("App listening"));
