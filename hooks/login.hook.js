let utils = require('./../utils');

module.exports = function () {
    return async ussdClass => {
        let {entryString, values,trans} = ussdClass

        // let title = `Welcome ${values.user.name} to MOU. Enter your pin to proceed`;
        let title = trans('WELCOME',{name:values.user.name})


        return ussdClass.helpers
            .withTitle(title)
            .autoValidate("pin", "Wrong Pin Format", null, async () => {
                let myUtils = await utils.init()
                let {status, data} = await myUtils.loginUser(values)

                console.log(status)
                if (status) {
                    ussdClass.setValues("user", data)
                    return ussdClass.continue()
                } else {
                    ussdClass.setUSSDString("Invalid Pin. Account Locked")
                    return ussdClass.wait().terminate()

                }

            })

    };
};
