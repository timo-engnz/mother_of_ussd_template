let utilsClass = require("./index");

utilsClass.init().then(async utils => {
    return utils.checkIfExist({})
}).then(results=>{
    console.log(results)


}).catch(err=>{
    console.error(err)
})

console.log("Test Started...")