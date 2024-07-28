function myName(){
    console.log("Hello");
}
// myName - reference
// myName() - execution

myName()

function addTwoNumbers(number1,number2){
    return number1+number2
    // after return the function doesn't continue
}
const result = addTwoNumbers(3,4)
console.log(result);

function loginUserMessage(username){
    if (!undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());//when you don't pass anything it willl be undefined