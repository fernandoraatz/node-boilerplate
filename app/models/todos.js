/*
|--------------------------------------------------------------------------
| Model - Todos
|--------------------------------------------------------------------------
*/

// Mongoose

let mongoose = require('mongoose');

// Schema

let schema = mongoose.Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    isChecked: {
        type: Boolean
    },
    image: {
        type: String
    }
}); 
 
// Create Model - Todo

mongoose.model('Todo', schema);
