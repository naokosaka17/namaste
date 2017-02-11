//npm module
var Sequelize = require("sequelize");
//require connection.js file
var sequelize = require("../config/connection_user.js")

// Creates a "Userinfo" model that matches up with DB
var Userinfo = sequelize.define("userinfo", {
  id: {
    // capital "S"!! bcz it is create table use by npm sequelize
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

// Syncs with DB
//IMPORTANT!!! ".sync()" makes automatically creates table for me
//but have to create DB by my self before sync to db.
Userinfo.sync();

// Makes the Userinfo Model available for other files (will also create a table)
module.exports = Userinfo;
