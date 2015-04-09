var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProfileSchema = new Schema({
    firstName: String,
    lastName: String,
    user_id: String,
    username: String,
    email: String,
    timeCreated: Number
});

module.exports = mongoose.model('userProfile', ProfileSchema);/**
 * Created by blumpk on 4/5/15.
 */
