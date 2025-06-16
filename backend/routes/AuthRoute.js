const { Signup, Login, Logout } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");

const router = require("express").Router();
const express = require("express");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify", userVerification);
router.post("/logout", Logout);

module.exports = router;
