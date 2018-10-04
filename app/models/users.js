/*
|--------------------------------------------------------------------------
| Models - Users
|--------------------------------------------------------------------------
*/

// Mongoose

var mongoose = require('mongoose');

// Schema - Users

var schema = mongoose.Schema({

    login: {
        type: String
    },
    password: {
        type: String
    }
});

// Criando Modelo - Post

mongoose.model('User', schema);
