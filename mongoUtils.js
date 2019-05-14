const mongoClient = require("mongodb").MongoClient;
const config = require("./config");

module.exports = class MongoUtils {
    getConnectionString(){
        return config.mongo.url;
    }

    getDataBaseString(){
        return config.mongo.database;
    }

    getCollectionString(){
        return config.mongo.collection;
    }

    
}