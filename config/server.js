// import module framework express
var express = require('express');

// import consign
var consign = require('consign');

// impor module body-parser
var bodyParser = require('body-parser');

// import express-validator
var expressValidator = require('express-validator');

// init object express
var app = express();

// set variables 'view engine' and 'views' express
app.set('view-engine', 'ejs');
app.set('views', './app/views');

// configuration middleware express.static
app.use(express.static('./app/public'));

// configuration middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

// configuration middleware express-validator
app.use(expressValidator());

//Autoload routes, models and controllers from object app
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app)

// export object app
module.exports = app;