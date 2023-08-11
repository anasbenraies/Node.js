//Modules and exporting 
const url = "http://logger.io/log"

const log=(message)=>{
    console.log(message)
}


//exporting url only , not within the module object 
module.exports=url

//module.exports.log=log
//exports.log=log