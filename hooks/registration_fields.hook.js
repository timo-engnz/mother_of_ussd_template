module.exports = function () {
    return init()
};

function init() {
    return async ussdClass => {
        let {entryString, values} = ussdClass


        let map = [
            {key: "id_number", prompt: "Enter your national ID number:", format: /^([0-9]*)\d{5}$/i},
            {key: "firstname", prompt: "Enter your FirstName", format: null},
            {key: "secondname", prompt: "Enter your SecondName", format: null},
            {key: "pin", prompt: "Enter your PIN:", format: null},
        ]


        return ussdClass.helpers.iffHasKey("continue_register",
            () => {
                return ussdClass.helpers.multipleFields(map, "Invalid Input. ", () => {
                    ussdClass.setUSSDString("Hurray. We have Registered You")
                    return ussdClass.terminate()

                })

            }, () => {

                return ussdClass.setUSSDString("We Need the Following Details to register you.\n-IDNumber\n-FirstName\n-secondname\n-pin")
                    .autoAppendLine("Register", {id: 1})
                    .helpers.autovalidateLines("continue_register", "Wrong Choice", false,
                        init())

            })


    };

}