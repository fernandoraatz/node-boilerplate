/*
|--------------------------------------------------------------------------
| Express - Config - Middlewares
|--------------------------------------------------------------------------
*/

// Modules

var express     =  require('express');
var consign     =  require('consign');
var bodyParser  =  require('body-parser');
var validator   =  require('express-validator');
var serveStatic =  require('serve-static');
var page404     =  require('./middlewares/page404')
var cors        =  require('./middlewares/cors')
var nunjucks    =  require( 'nunjucks' ) ;

// Express Module - App

var app = express();

// Template Engine

nunjucks.configure( './app/views', { autoescape: true, express: app});

// Middlewares

app.set('view engine','njk');
app.use(express.static('./app/static'))
app.use(serveStatic('./app/files'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors);

// Validator

app.use(validator());

// Consign

consign({cwd: 'app'})
    .then('models')
 	.then('controllers')
 	.then('routes')
    .then('helpers')
    .into(app);
     
// Not Found Page

app.use(page404);

// Express Export

module.exports = app;
