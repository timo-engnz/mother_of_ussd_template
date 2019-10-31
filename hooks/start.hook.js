let utils = require('./../utils');

module.exports = function () {
    return async ussdClass => {
        let {entryString, values} = ussdClass

        let myUtils = await utils.init()
        let {status, data} = await myUtils.checkIfExist(values)

        if (status) {
            ussdClass.setValues("user", data)
            return ussdClass.jumpTo(3)
        } else {
            return ussdClass.jumpTo(2)
        }


    };
};
