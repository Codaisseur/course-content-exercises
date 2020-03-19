const express = require("express");

const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
const jsonParser = express.json();
app.use(jsonParser);

// Routers

// Start server
app.listen(PORT, () => console.log("App listening"));
