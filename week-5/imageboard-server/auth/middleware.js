const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  // Authorization:"Bearer token"; => ["Bearer", "hdladhajda"]
  // 1. check for authorization header and "split" it.
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");

  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const tokenData = toData(auth[1]);

      // find the user
      // attach the user to the request
      const userId = tokenData.userId;
      const user = await User.findByPk(userId);

      req.user = user;

      next();
    } catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`
      });
    }
  } else {
    res.status(401).json({
      message: "Please supply some valid credentials"
    });
  }
  // 2. if authorization header is there, auth type is Bearer and we have something at auth[1] we proceed to check the token.

  //    If not, we return a 401 status and the message: 'Please supply some valid credentials
  //    Remember to try/catch the call to "toData()".
  // 3. Use the value returned from "toData()" to look for that user in your database with User.findByPk
  // 4. If not found, call next();
  // 5. If user is found, set it to `req.user = user` and call next();
}

module.exports = auth;
