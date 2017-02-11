// Dependencies
// =============================================================
var express = require("express");
var path = require('path');
var router = express.Router();
var Burger = require("../models/burger.js");

// Routes
// =============================================================
// get route -> index
router.get("/", function(req, res) {
	res.redirect("/burgers");
});