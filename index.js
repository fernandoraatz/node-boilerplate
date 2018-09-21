/*
|--------------------------------------------------------------------------
| Index - Server
|--------------------------------------------------------------------------
*/

// Express

var app = require('./config/express');

// HTTP

var http = require('http').Server(app);

// Running Server 

var port = process.env.PORT; 

http.listen(port, function(){
    console.log(`Servidor Rodando na porta ${port}`);  
});
