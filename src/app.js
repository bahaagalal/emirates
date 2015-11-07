var http = require('http');
var express = require('express');
var ejsmate = require('ejs-mate');

var app = express();
var server = http.Server(app);

var config = require(__dirname + '/config.js')[app.settings.env];

if(app.settings.env == 'production')
	app.use(express.static(__dirname + '/../public/dist'));
else
	app.use(express.static(__dirname + '/../public/dev'));

app.engine('ejs', ejsmate);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.locals.environment = app.settings.env;

global.config = config;
require(__dirname + '/routes')(app);
server.listen(config.server.port);
