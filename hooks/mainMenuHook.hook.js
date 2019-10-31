let utils = require('./../utils');

module.exports = function () {
    return async ussdClass => {
        let {entryString, values} = ussdClass

        return ussdClass.helpers
            .withTitle("Here is the Main Menu")
            .withLineData("name", [
                {id: 1, name: "Say Hae", jump_code: 5},
                {id: 2, name: "Order Food", jump_code: 5},
                {id: 3, name: "Make Payment", jump_code: 5},
                {id: 4, name: "Support Us", jump_code: 5}
            ])
            .manageJumps('mm_selection', "Wrong Choice.")



    };
};
