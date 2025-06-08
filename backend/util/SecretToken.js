require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  console.log("hellllllo token.js");
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
