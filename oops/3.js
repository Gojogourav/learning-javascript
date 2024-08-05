// Global Execution Context

// The Global Execution Context is the default or base execution context where the JavaScript engine starts execution. It is created when the JavaScript engine starts executing your code for the first time.
// Components of the Global Execution Context

//     Global Object:
//         In a browser, this is the window object. In Node.js, it is the global object.
//         It contains built-in objects like Object, Array, Function, etc., and any global variables or functions.

//     this:
//         In the global context, this refers to the Global Object.

//     Variable Object:
//         Contains all global variables and function declarations.


function setUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    // setUsername(username)//this only sends reference 
    
    // setUsername.call(username)//use this to call

    //as soon it's executed it's execution context is also removed
    // so to hold the refrence we have to give it a reference
    // when a function is called as a method of an object, "this" refers to the object on which the method is called
    //also this is used to control the execution context
    setUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUser('gourav','random@email.com','1234')
console.log(chai);
