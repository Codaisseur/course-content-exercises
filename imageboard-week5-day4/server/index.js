const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const PORT = process.env.PORT || 4002;

const app = express();
const jsonParser = express.json();
//app.use(cors);
app.use(jsonParser);

app.use("/users", userRouter);
app.use("/images", imageRouter);

app.get("");

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
