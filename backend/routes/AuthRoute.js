const { Signup, Login } = require("../controllers/AuthController");
const express = require("express");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
