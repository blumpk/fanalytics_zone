var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var teamsSchema = new Schema({
    team_id : String,
    abbreviation : String,
    active : Boolean,
    first_name : String,
    last_name : String,
    conference : String,
    division : String,
    site_name : String,
    city : String,
    state : String,
    full_name : String
});

module.exports = mongoose.model('Teams', teamsSchema, 'teams' );;