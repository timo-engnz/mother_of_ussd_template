let utils = require('./../utils');

module.exports = function () {
    return async ussdClass => {
        let {entryString, values,trans} = ussdClass

        let title = `Welcome ${values.user.name} to MOU. Enter your pin to proceed`;


        return ussdClass.setUSSDString("Halloo there.. I hope you can continue from here").wait()
        // return ussdClass.setUSSDString("Olah.. Bye Bye").terminate()

    };
};
