/*
|--------------------------------------------------------------------------
| Express - Config - Middlewares
|--------------------------------------------------------------------------
*/

// Modules

var express     =  require('express');
var consign     =  require('consign');
var bodyParser  =  require('body-parser');
var serveStatic =  require('serve-static')
var page404     =  require('./middlewares/page404')
var cors        =  require('./middlewares/cors')

// Express Module - App

var app = express();

// Middlewares

app.set('view engine','ejs');
app.set('views', './app/views');
app.use(express.static('./app/static'))
app.use(serveStatic('./app/files'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors);

// Consign

consign({cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);

// Not Found Page

app.use(page404);

// Express Export

module.exports = app;
