const express = require("express");
const imageRouter = require("./routers/image");
const authRouter = require("./routers/auth");

const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
const jsonParser = express.json();
app.use(jsonParser);

// Routers
app.use("/images", imageRouter);
app.use("/auth", authRouter);

// Start server
app.listen(PORT, () => console.log("App listening"));
