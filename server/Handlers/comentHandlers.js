/**
 * Created by sergey-raichman on 19/03/2017.
 */
let commentsService = require('../Services/commentsService').commentsService;
var md5 = require("blueimp-md5");

function getAllComments (req, res) {
    commentsService.getAllComments().then(data => {
        let response = data;
        if (!data.error) {
            response = {success: true, comments: data};
        }
        res.end(JSON.stringify(response));
    });
}

function saveComment (req, res) {
    let newComment = req.body;
    newComment.gravatar = md5(newComment.email);
    commentsService.saveComment(newComment).then(data => {
        res.send(data);
    });
}

module.exports.commentsHandlers = {
    getAllComments,
    saveComment
};