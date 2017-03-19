/**
 * Created by sergey-raichman on 19/03/2017.
 */
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');

const commentSchema = mongoose.Schema({
    email: String,
    commentText: String,
    gravatar: String
});

let Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
