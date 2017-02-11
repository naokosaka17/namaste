// Dependencies
// =============================================================
var express = require("express");
var path = require('path');
var router = express.Router();
var Userinfo = require("../models/userinfo.js");

// Routes
// =============================================================
// get route -> index
router.get("/", function(req, res) {
	res.redirect("/namaste");
});

// POST route -> (create) back to index
router.post("/signin", function(req, res) {
	// takes the request object using it as input for burger.addBurger
	Userinfo.create({ username: req.body.username,
		devoured: false }).then(function(){
		// If don't have .redirect("/") only database is changed but not on the screen
		res.redirect("/")
	});
});

// PUT route -> (up date) back to index
router.post("/signin/:id", function(req, res) {
	// 
	Burger.update({  
		devoured: true 
	},{
		where:{
			id: req.params.id }}).then(function() {
		// If don't have .redirect("/") only database is changed but not on the screen
		res.redirect("/")
	});
});


module.exports = router;