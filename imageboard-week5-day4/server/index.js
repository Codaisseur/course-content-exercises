const express = require("express");
const authMiddleware = require("./auth/middleware");
const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const authRouter = require("./routers/auth");
const PORT = process.env.PORT || 4002;

const app = express();
const jsonParser = express.json();
//app.use(cors);
app.use(jsonParser);

app.use("/", authRouter);
app.use("/users", userRouter);
app.use("/images", authMiddleware, imageRouter);

app.get("");

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
