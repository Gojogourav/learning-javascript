// let myName = "gourav     "

// console.log(myName.trueLength);


let myHeros = ["thor",'spiderman']
let heroPower = {
    thor :'hammer',
    spiderman :'web',

    getSpiderPower : function(){
        console.log(`Spidy poewr is ${this.spiderman}`);
    }
}

Object.prototype.gourav = function(){
    console.log("gourav is present in all objects");
}

Array.prototype.heygourav = function(){
    console.log('gourav says hellow');
}
// heroPower.gourav()
myHeros.heygourav()
// heroPower.heygourav() doesn't have access to heygourav


//inheritance

// const User = {
//     name:'gourav',
// }
// const teacher = {
//     makeVide:true
// }
// const teachingSupport ={
//     isAvailable :false
// }
// const TASupport ={
//     makeAssignment :'JS assignment',
//     fullTime : true
// }
// teacher.__proto__=User

//modern syntax

Object.setPrototypeOf(TASupport,teacher)//tasupport will inherit teacher


let myName = "gourav      "
console.log(myName);

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`true length is : ${this.trim().length}`)
}
myName.trueLength()
