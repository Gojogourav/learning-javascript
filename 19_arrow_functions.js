const user = {
    username:"gourav",
    price:999,

    welcomeMessage:function(){
        console.log(`welcome to website ${this.username}`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="aditya"
// user.welcomeMessage()
// console.log(this);//the global object here is window object

function random(){
    let username="gourav"
    // console.log(this.username); cant use it outside object
}
random()

//THIS CAN BE USED AS 
// const chai=function(){

// }
const chai =()=>{
    let username="gourav"
    // console.log(username.this);
}
chai()

//ARROW FUNCTION
const addTwo = (num1,num2)=>{
    return num1+num2
}

console.log(addTwo(4,3));

const addTwo1=(num1,num2) =>  (num1+num2)
console.log(addTwo1(4,5));
//to not write return wrap it in parenthisis

