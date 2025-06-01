const { Signup } = require("../controllers/AuthController");
const express = require("express");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;
