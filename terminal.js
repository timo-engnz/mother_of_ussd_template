var env       = process.env.NODE_ENV || 'development';
let mother_of_ussd = require('mother_of_ussd');
var language_config    = require('./config/lang.json')[env];
const default_config = require('./config/defaults.json')[env];
const database_config = require('./config/database.json')[env];
const hooks = require('./hooks/__hooks__');

// let _allowLogging="db, params, logs, debug,verbose, info,error";
// let _allowLogging="logs, params,info, error";
// let _allowLogging="logs, params,info, debug,error";
// let _allowLogging="logs, params,info, error, debug, verbose,";
// let _allowLogging="db,params,logs, error, debug,";
let _allowLogging = "params logs verbose";

mother_of_ussd.startTerminal(_allowLogging,language_config,default_config,database_config,hooks,"254700000000")