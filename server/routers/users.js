var express = require('express');
var router = express.Router();

// import db Controllers
var db = require('../../db/controllers/Controller.js');


// when URL ending is: .../api/users
router.route('/')
  // sends back an array of all users
  .get(function(req, res) {
     db.findAllUsers(function(data) {
     	res.send(data);
     })
  })
  // posts new user
  .post(function(req, res) {
  	// To Do: should read data off of req

    // sample data for now
    var user = {
      phone:8675309,
      username:'comesm',
      tagline:'wowimcool',
      firstName:'michael',
      lastName:'comes',
      location:'SF',
      image:'td',
      field:'engineering',
      company:'HR'
    };

    db.addUser(user, function(result) {
      res.send('POST NEW USER CALLED')
    });

    // ToDo: should handle error
  	
  });

// when URL ending is, e.g.: /api/users/14
router.route('/:id')
  .get(function(req, res) {
  	// To Do: Sends back info on user 14.
  	res.send('To Do: fill in request');
  });

module.exports = router;