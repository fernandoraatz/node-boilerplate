/*
|--------------------------------------------------------------------------
| Databases / Mongoose
|--------------------------------------------------------------------------
*/

// Require Mongoose 

const mongoose = require('mongoose');

// MongoDB

class MongoDB{

    constructor(){
        this.databaseName = "todos"
    }

    connect(){

        mongoose.connect('mongodb://localhost:27017', { useMongoClient: true });
        
        mongoose.Promise = global.Promise;
        mongoose.connection.on('connected', () =>  console.info('[v] Connected to MongoDB') ); 
        mongoose.connection.on('disconnected', () =>  console.info('[v] Disconnected to MongoDB') ); 
        mongoose.connection.on('error', (error) =>  console.info(`[x] Connection Error:${error}`) ); 

        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                console.info('[x] Application and connection closed')
                process.exit(0);
            });
        });
    }
} 

// Export

module.exports = new MongoDB();
