var mou = require('mother_of_ussd');
var env       = process.env.NODE_ENV || 'development';
var language_config    = require('./config/lang.json')[env];
var default_config    = require('./config/defaults.json')[env];
var database_config    = require('./config/database.json')[env];
var hooks    = require('./hooks/__hooks__');
const express = require('express');
const router = express.Router();
var fs = require('fs');


let sslFiles={
    privateKey  : fs.readFileSync(__dirname +'/config/selfsigned.key', 'utf8'),
    certificate  : fs.readFileSync(__dirname +'/config/selfsigned.crt', 'utf8')
}

function routes(expressApp){

    router.get('/', function(req, res, next) {
        res.send('Welcome to Here');
    });

    expressApp.use('/app', router);
    return router
}



mou.startMOU(language_config,default_config,database_config,hooks,routes,sslFiles)
