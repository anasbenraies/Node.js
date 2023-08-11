const path = require("node:path")


file_path="C:\Users\Software Engineer\AppData\Roaming\npm\package.js"
let {ext}=path.parse(__filename)
console.log(ext)

// Os Module 
/*
const os =require("os")

console.log(os.arch())

//system Module
const fs = require("fs")

fs.readdir("./",(err,res)=>{
    if (err)
        console.log(err)
    else
    setTimeout(() => {
        console.log("Must be first"+res)   
    },3000);
})
console.log("Must be second")

*/

// Events = signal
const EventEmitter = require('events');
class Events extends EventEmitter{

    Registration(name){
        this.emit("Registration",name)
    }
}

module.exports.Events=Events

