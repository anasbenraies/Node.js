// Global  : global is the global scope object that have multiple objectes and functions in it 
const sayHello=()=>{
    console.log("hello")
}
// console.log("hello")
//const myIntervaliD =setInterval(sayHello,2000)
//const message="message"
//global.console.log("hello")
//console.log(window.messa)


// Module 
//console.log(module)

//Module importing 
//import { url } from "./Modules/CustomModule.js"

const url =require("./Modules/CustomModule")
var website="www.google.com"
exports.website=website
console.log(url)
console.log(exports)
const F =require("./Modules/CoreModule")

 const event=new F.Events()

 event.on("Registration",(name)=>{
    console.log(name+" has logged out.")
 })

 event.Registration("Said")







