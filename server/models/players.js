var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var playersSchema = new Schema({
    first_name : String,
    last_name : Boolean,
    display_name : String,
    height_in : Number,
    height_cm : Number,
    age : String,
    roster_status : String,
    weight_kg : Number,
    birthplace : String,
    birthdate : String,
    weight_lb: Number,
    uniform_number: Number,
    height_m: Number,
    height_formatted : String,
    position : String
});

module.exports = mongoose.model('Players', playersSchema, 'players' );;