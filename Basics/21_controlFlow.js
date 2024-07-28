//learn how javascript execute code + call stack before studying this - https://youtu.be/ByhtOgF6uYM?feature=shared

//if 

const isUserLoggedIn=true
const temperature = 41


if(temperature<50){
    console.log("less than 50");
}   
else{
    console.log("temperatuer more than 50");
}
console.log(2=="2");//will give true since == doesn't compare the datatype
console.log(2==="2");//will give falce ,it'll compare the datatype also

const score = 200
if(score>100){
    const power = "fly"
    console.log(`user power : ${power}`);
}

const balance =1000

if(balance>500) console.log("test");

if(balance<500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 759");
}else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn&&debitCard){
    console.log("user allowed to buy course");
}
if(loggedInFromEmail||loggedInFromGoogle){
    console.log("Log in succesful");
}


const month = 3
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("month not found");
}

//truey, falseys
const userEmail=[]

if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email");
}

//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//truey value
//true,"0","false"," ",[],{},function(){},

//NULLISH COALESCING OPERATOR (??): NULL UNDEFINED
//doesn't let the variable be assigned to null/undefined
let val1;
val1 = 5??10
val1 = null??10
console.log(val1);

//TERINARY OPERATOR- Left true , right false
condition ? true :false
const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("more than 80"):console.log("less than 80")