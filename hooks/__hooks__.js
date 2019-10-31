let startHook = require('./start.hook');
let RegistrationFieldsHook = require('./registration_fields.hook');

let mainMenuHook = require('./mainMenuHook.hook');
let sampleHook = require('./sample.hook');
let loginHook = require('./login.hook');
let registrationTCHook = require('./registration_tc.hook');


module.exports = [
    {code: 1, fxn: startHook()},
    {code: 2, fxn: registrationTCHook()},
    {code: 3, fxn: loginHook()},
    {code: 4, fxn: mainMenuHook()},
    {code: 5, fxn: sampleHook()},
    {code: 6, fxn: RegistrationFieldsHook()},

];
