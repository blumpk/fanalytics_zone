var express = require('express');
var router = express.Router();
//var Teams = require('../models/teams');
//var Players = require('../models/players');
var myTeam = require('../models/myTeam');
var myQuestion = require('../models/myQuestion');
var mongoose = require('mongoose');
var nbaModel = require('../models/nbamodels');

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
     router.post('/login', passport.authenticate('login', {
         successRedirect: '/home',
             failureRedirect: '/login',
             failureFlash : true
     }));

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
        res.redirect('/');
    });


    router.get('/teams', function(req, res) {
        console.log(req.user.id);
        nbaModel.teams.find({}, function(err, data) {
            res.send(data);
        });
    });

    router.get('/players', function(req, res) {
        nbaModel.players.find({}, function(err, data) {
            res.send(data);
        });
    });

    router.post('/profile/myTeam', function(req, res) {
        console.log(req.body);
        myTeam.findOneAndUpdate(
            {user_id: req.user.id},
            {$push: {players : req.body._id}},
        {safe: true, upsert: true},
        function(err) {
            console.log(err);
        });
    });

    router.get('/profile/myTeam', function(req, res) {
        var players;
        myTeam.find({user_id: req.user.id}, function(err, data) {
            players = data[0].players;
            nbaModel.players.find({"_id": { $in: players}
            }, function(err, data) {
                res.send(data);
            });
        });
    });

    router.post('/profile/myQuestion', function(req, res) {
        console.log(req.body);
        var question = new myQuestion();
            question.user_id = req.user.id;
            question.players = req.body.players;
            question.suggestions = [];
            question.timeCreated = Date.now();
            question.numberSelects = req.body.numSelect;

        question.save(function(err) {
            if (err)
                throw err;
            return
        });
    });

    router.get('/nba/teams', function(req, res) {
        nbaModel.teams.find({}, function(err, data) {
            res.send(data);
        });
    });

    router.get('/nba/player/gamestats/:id', function(req,res) {
        nbaModel.playerGame.find({"PLAYER_ID": req.param("id")}, function(err, data) {
            res.send(data);
        });
    });

    router.get('/nba/player/careerstats/:id', function(req, res) {
        nbaModel.playerCareer.find({"PLAYER_ID": req.param("id")}, function(err, data) {
            res.send(data);
        });
    });

    router.get('/nba/player/:id', function(req,res) {
        nbaModel.playerInfo.find({"PERSON_ID": req.param("id")}, function(err, data) {
            res.send(data);
        });
    });

    router.get('/nba/teams/season/:id', function(req, res) {
        console.log(req.param("id"));
        nbaModel.teamSeason.find({"Team_ID": req.param("id")}, function (err, data) {
            res.send(data);
        });
    });

    router.get('/nba/teams/:id', function(req, res) {
        nbaModel.teamInfo.find({"TEAM_ID": req.param("id")}, function(err, data) {
            res.send(data);
        });
    });



    return router;
}
