const express = require("express");
const imageRouter = require("./routers/image");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");

const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
const jsonParser = express.json();
app.use(jsonParser);

// Routers
app.use("/images", imageRouter);
app.use("/auth", authRouter); // '/auth/login'
app.use("/user", userRouter);

// Start server
app.listen(PORT, () => console.log("App listening"));
