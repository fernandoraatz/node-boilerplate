/*
|--------------------------------------------------------------------------
| Index - Server
|--------------------------------------------------------------------------
*/

// Express | Http | MongoDB

let app = require('./config/express');
let http = require('http').Server(app);
let database = require('./config/database');   
 
// Running Database 

database.connect();

// Running Server 

http.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor Rodando na porta ${process.env.PORT}`)
})

 