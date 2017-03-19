/**
 * Created by sergey-raichman on 19/03/2017.
 */
let Comment = require('../Models/comment');

function getAllComments() {
    let p = new Promise(resolve => {
        Comment.find({}, (err, comments) => {
            if (err) {
                resolve({error: true});
            }
            resolve(comments);
        })
    });
    return p;
}

function saveComment(comment) {
    let p = new Promise(resolve => {
        let newComment = new Comment(comment);
        newComment.save((err, c) => {
            if (err) {
                resolve({error: true});
            }
            resolve({success: true});
        });
    });
    return p;


}

module.exports.commentsService = {
    getAllComments,
    saveComment
};