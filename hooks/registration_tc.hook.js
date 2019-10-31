module.exports = function () {
    return async ussdClass => {
        let {entryString, values} = ussdClass

        ussdClass.setUSSDString("Welcome to MOU. How about we register you")
            .autoAppendLine('Register', {state: true})
            .autoAppendLine('Cancel', {state: false})


        if (ussdClass.validateLine(entryString)) {
            let selected_line = ussdClass.getLine(entryString)
            ussdClass.setValues("side_effect", selected_line)

            if (selected_line.data.state) {
                return ussdClass.jumpTo(6)

            }
        }

        return ussdClass.end()


    };
};
