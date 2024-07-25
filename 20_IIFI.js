//IMMEDIATELY INVOKED FUNCTION EXPRESSON (IFFE)
//Avoid Polluting the Global Scope: Variables defined inside an IIFE are not accessible from the outside, thus preventing the risk of polluting the global scope.
//function that runs as soon as it is defined
(function chai() {
    console.log('DB connected');
})();

//first parenthisis  -> function defination
//second parenthisis -> execution call

( (name)=> {
    console.log(`DB connected ${name}`);
})('gourav');
