var mongoose = require('mongoose');
var Players = require('../models/players');
var Schema = mongoose.Schema;
var myTeamSchema = new Schema({
    user_id: String,
    players: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('myTeam', myTeamSchema);