# mother_of_ussd_template
A Template for USSD Service     
######"mother_of_ussd": "5.6.0"


##Installation
  1. Clone the repo <code>git clone https://github.com/timo-engnz/mother_of_ussd_template.git</code>
  2. Run <code>cd mother_of_ussd_template && npm install</code><br/>or<br/><code>cd mother_of_ussd_template && yarn install</code>
  3. To run HTTP|HTTPS Endpoints: <code>node index.js</code>
  4. To run/Test on terminal: <code>node terminal.js</code>
  
##Test
MOU default USSD endpoint is:
```
Endpoint Sample
http://localhost:3000/ussd?MSISDN=254705126329&SESSION_ID=123&SERVICE_CODE=000&USSD_STRING=

Base: /ussd
Params:
    MSISDN
    SESSION_ID
    SERVICE_CODE
    USSD_STRING
    
```

```
curl -X GET \
  'http://localhost:3000/ussd?MSISDN=254705126329&SESSION_ID=123&SERVICE_CODE=000&USSD_STRING=' \
  -H 'Postman-Token: 1dd93e4b-1640-4be4-a501-e1ff3671443e' \
  -H 'cache-control: no-cache'
```

##Structure
- config: <code>Hosts Configuration Files</code>
- hooks:  <code>USSD Flow Files</code>
- utils: <code>Your Application Logic</code>
- index.js: <code>Express Init File</code>
- terminal.js: <code>Test on terminal</code>
-  package.json 

##Hooks
MOU uses hooks, arranged by a key 'code'. In folder <code>./hooks</code>, all the hooks are registered in the <code>__hooks__.js</code>

```javascript
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

```
##Example Hook
Below is a sample hook with all the possible functions
```javascript

let utils = require('./../utils'); //To your Login initialization file

module.exports = function () {
    return async ussdClass => {
        let {entryString, values,trans} = ussdClass

        let title1 = `Welcome Timothy to MOU. Enter your pin to proceed`;
        let title2 = trans('WELCOME',{name:"Timothy"})


        return ussdClass.setUSSDString("Halloo there.. I hope you can continue from here")
            .wait() //WILL wait for user input
        
        return ussdClass.setUSSDString("Olah.. Bye Bye")
            .terminate() //WILL Terminate the USSD Session 

        return ussdClass.continue() //WILL move to the next menu on the hooks flow 

    };
};


```


###Documentation
The Documentation is in Progress. I got hungry and had to go get a snack..

<br/><br/>
*No pressure No Gold*