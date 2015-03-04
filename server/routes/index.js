var express = require('express');
var router = express.Router();
var Teams = require('../models/teams');
var Players = require('../models/players');

var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated()) {
        return next();
    }
    // if the user is not authenticated then redirect him to the login page
    res.status(401).send('home.html', {title: 'Express'});
    //res.send(401);
    //res.render('home.html', {title: 'Express'});
};

module.exports = function(passport) {
    /* GET home page. */
    router.get('/', function (req, res) {
        res.render('home.html', {title: 'Express'});
    });

    router.get('/home', isAuthenticated,  function (req, res) {
        res.render('home.html', {title: 'Home'});
    });

// route to test if the user is logged in or not
    router.get('/loggedin', function (req, res) {
        console.log(req.isAuthenticated());
        res.send(req.isAuthenticated() ? req.user : '0');
    });

    /* GET Registration Page */
    router.get('/register', function(req, res){
        res.render('register.html',{message: req.flash('message')});
    });

    /*
    router.post('/register', passport.authenticate('register', {
        successRedirect: '/',
        failureRedirect: '/register'
    }));
    */

     // route to log in
     router.post('/login', function(req, res) {
         res.send(req.user);
     });

    /* Handle Login POST */
    /* Handle Registration POST */


    router.post('/register', passport.authenticate('register', {
        successRedirect: '/home',
        failureRedirect: '/register',
        failureFlash : true
    }));

    /* Handle Logout */
    router.get('/logout', function(req, res) {
        req.logout();
        res.send(200);
    });

    router.get('/teams', function(req, res) {
        Teams.find({}, function(err, data) {
            res.send(data);
        });
    });

    router.get('/players', function(req, res) {
        Players.find({}, function(err, data) {
            res.send(data);
        });
    });

    return router;
}
