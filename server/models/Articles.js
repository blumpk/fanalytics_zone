var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
    user_id: String,
    title: String,
    comments: [
        {
            user: String,
            comment:String,
            time: Number
        }
    ],
    text: String,
    timeCreated: Number
});

module.exports = mongoose.model('articles', ArticleSchema);