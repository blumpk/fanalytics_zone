var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html', { title: 'Express' });
});

router.get('/home', isAuthenticated, function(req, res) {
  res.render('home.html', { title: 'Home' });
});

router.post('/login', passport.authenticate('login', {
  successRedirect:'/home',
  failureRedirect: '/',
  failureFlash: true
}));

router.get('/register', function(req, res) {
  res.render('register', {message: req.flash('message')});
});

router.post('/register', passport.authenticate('register', {
  successRedirect:'/home',
  failureRedirect: '/register',
  failureFlash: true
}));

router.get('/signout', function(req, res) {
  req.logout();
  res.redirect('/');
});

var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports = router;
