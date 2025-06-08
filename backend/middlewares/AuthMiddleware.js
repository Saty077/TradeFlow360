const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  console.log("Token received in cookie:", token); //test
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};

// const User = require("../models/UserModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token;
//   console.log("Token received in cookie:", token); //test
//   console.log("hello it's middleware.js");
//   if (!token) {
//     return res.json({ status: false, message: "No token provided" });
//   }
//   jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
//     if (err) {
//       console.error("JWT verification error:", err.message); // Debug
//       return res.json({ status: false, message: "Invalid token!" });
//     }
//     console.log("JWT decoded data:", data); // Debug
//     const user = await User.findById(data.id);
//     if (user) {
//       console.log("User found:", user); // Debug
//       return res.json({ status: true, user: user.username });
//     }
//     console.warn("User not found for ID:", data.id); // Debug
//     return res.json({ status: false, message: "User not found" });
//   });
// };
