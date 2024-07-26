const score = 400
const balance = new Number(100)
console.log(balance);
// turns into string
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.85653
// the precision will be on three number from the start 
console.log(otherNumber.toPrecision(3));

const hundreds =  10000000
// the following will put commas in between the zeros of large number
console.log(hundreds.toLocaleString('en-IN'));

// ******************MATHS***********************************************

console.log(Math);
// abs = absolute value 
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));


// Math.random() will always return a number between 0 and 1
console.log(Math.random());
console.log((Math.random()*10)+1);//if we multiply it by 10 we will always get a number bwetween 0 and 10 
// since for example the Math.random() can output 0.041 so multiplying it by 10 is not enxough we we add 1 to it to make sure it'll minimum output 1

const min = 10
const max = 20
// the following is the formula to get random number between a certain range
console.log(Math.floor(Math.random()*(max-min+1))+min);
