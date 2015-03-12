var mongoose = require('mongoose');
var Players = require('../models/players');
var Schema = mongoose.Schema;
var myTeamSchema = new Schema({
    _id : String,
    user_id: String,
    players: [String]
});

module.exports = mongoose.model('myTeam', myTeamSchema);