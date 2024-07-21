// Primitiv datatypes
// String, Number, Boolean, null, undefined, Symbol, BigInt
// Javascript is a dynamically typed language
const score = false
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId); //will return false 

const bigNumber = 299792458299792458n


// Reference (non primitiv)
// Array, Objects, Functions
const heros = ["iron man","captain america","hulk"]
let myObj= {
    // object
    name:"Gourav",
    age:19, 
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);