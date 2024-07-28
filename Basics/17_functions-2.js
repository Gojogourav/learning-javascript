function calculateCardPrice(...num1) {//enable us to pass multiple values into function
    return num1
}
console.log(calculateCardPrice(200, 300, 400));
const user = {
    username: "gourav",
    price: 299
}

function handleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
    
}
console.log(handleObject(user));

handleObject(
    {
        username:"random",
        price:699
    }
)
console.log(handleObject.username);

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));