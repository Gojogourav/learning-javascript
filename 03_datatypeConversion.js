let score = "absc"
console.log(typeof score);
let valueInNumber = Number(score)
// the above code guarantees that score is a number and no other data type
console.log(valueInNumber);//it will give output as NAN (not a number)
console.log(typeof(valueInNumber));//it will give output as number since NAN IS NUMBER
// "33"-> 33
//"33abs"-->NAN(not a number)
//true--> 1/false-->0

let isLoggedIn =-1;
loggedIn=Boolean(isLoggedIn)
console.log(loggedIn);//here data type is converted to true
