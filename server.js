/**
 * Created by sergey-raichman on 17/03/2017.
 */
let express = require('express');
let bodyParser = require('body-parser');
let commentRoutes = require('./server/Routes/commentRoutes');

const commentsApp = new express();


function middleWares(app) {
    app.use(bodyParser.json());
}

function applyRoutes(app) {
    app.use('/',commentRoutes);
    app.use('/static', express.static(`${__dirname}/statics/`));

    app.get('/', function (req, res) {
        res.sendFile(`${__dirname}/statics/index.html`)
    });
}

function init(app) {
    middleWares(app);
    applyRoutes(app);

    app.listen(3001, function () {
        console.log('Example app listening on port 3001')
    });
}

init(commentsApp);