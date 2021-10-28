const express = require('express');
const debug = require('debug')('app:adminRouter');
const { MongoClient } = require('mongodb');
const sessions = require("../data/sessions.json");

const adminRouter = express.Router();

adminRouter.route('/').get((req,res)=>{
    //removed /MyFirstDatabase from the url obtained from the cloud.mongodb account
    const url = 'mongodb+srv://techdotmasterpiece_admin:_w#v236$$tDiM4s@techdotmasterpiece.6al7f.mongodb.net?retryWrites=true&w=majority';
    const dbName = "techdotmasterpiece_demoExpressWebApp";

    (async function mongo(){
        let client;
        try {
            client = await MongoClient.connect(url);
            debug('Connected to Mongo DB');

            const db = client.db(dbName);

            const response = await db.collection('sessions').insertMany(sessionsData);

            //printing out the response
            res.json(response);
        } catch (error) {
            debug(error.stack);
        }
    }());
});



module.exports = adminRouter;