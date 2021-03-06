var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var myQuestionSchema = new Schema({
    user_id: String,
    players: [Number],
    suggestions: [
        {
            user: String,
            rec:[Schema.Types.Mixed]
        }
    ],
    timeCreated: Number,
    numberSelects: Number
});

module.exports = mongoose.model('myQuestion', myQuestionSchema);