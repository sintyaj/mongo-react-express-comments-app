/**
 * Created by sergey-raichman on 19/03/2017.
 */
let express = require('express');
let commentsHandlers = require('../Handlers/comentHandlers').commentsHandlers;

let router = express.Router();

router.get('/comments', commentsHandlers.getAllComments);
router.post('/save-comment', commentsHandlers.saveComment);

module.exports = router;
