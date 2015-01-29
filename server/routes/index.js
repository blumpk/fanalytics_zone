var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home.html', { title: 'Express' });
});

router.get('/home', function(req, res) {
  res.render('home.html', { title: 'Home' });
});

// route to test if the user is logged in or not
router.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

router.get('/register', function(req, res) {
    res.render('views/register.html', { });
});

// route to register
router.post('/register', function(req, res) {
 User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.render('views/register.html', { account : account });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});

// route to log in
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});


// route to log out
router.post('/logout', function(req, res){
  req.logOut();
  res.send(200);
});
module.exports = router;
