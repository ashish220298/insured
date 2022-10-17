var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var flash = require('connect-flash');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://niraj:qwerty123@cluster0-wawei.mongodb.net/test?retryWrites=true', {
});
//require("./models/Product");

require("./models/Agent");
require("./models/PolicyCarrier");
require("./models/PolicyCategory");
require("./models/User");
require("./models/UserAccount");
require("./models/PolicyInfo");

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(session({
    cookie: {
        maxAge: 60000
    },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());


app.use('/', index);
app.use('/users', users);


module.exports = app;
