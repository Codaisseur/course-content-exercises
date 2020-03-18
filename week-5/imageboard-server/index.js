const express = require("express");
const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const authRouter = require("./routers/auth");
const authMiddleware = require("./auth/middleware");

const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
const jsonParser = express.json();
app.use(jsonParser);

// Routers
app.use("/users", userRouter);
app.use("/images", authMiddleware, imageRouter);
app.use("/", authRouter);

// Start server
app.listen(PORT, () => console.log("App listening"));
