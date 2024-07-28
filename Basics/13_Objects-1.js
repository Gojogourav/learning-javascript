//singleton - when we declare as literals it will not be singleton

//object literals


const mySym =  Symbol("key1")

const JsUser = {
    name:"Gourav",
    age:19,
    email:"sampleEmail@gmail.com",
    isLoggedIn:false,
    LoginDays:["MOnday","Tuesday"],
    "WorkDays":["Wed","thu","fri","sat","sun"],
    [mySym]:"mykey1"
}
console.log(JsUser.email);
console.log(JsUser ["email"]);
console.log(JsUser["WorkDays"]);
console.log(JsUser.mySym); //this will return mykey 1 which is a string not a symbol
console.log(JsUser[mySym]);//this will access the symbol
// Object.freeze(JsUser)//when freezed you can no longer change elements in jsuser
JsUser.email="random@email.com"


JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());