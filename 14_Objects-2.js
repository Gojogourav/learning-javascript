const tinderUser = new Object()//singleton object
const tinderUser2 = {}//non singleton object

tinderUser.id = "123abc"
tinderUser.name="Gourav"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email:"reandom@gmail.com",
    fullname:{
        userfullname:{
            firstname:"gourav",
            lastname:"blank"
        }
    }
}
// put question mark so if fullname doesn't exist it wont show error
console.log(regularUser.fullname?.userfullname.firstname);

const obj1= {
    1:"a",
    2:"n"
}
const obj2= {
    3:"a",
    4:"n"
}
// const obj3 = {obj1,obj2}//object 1 ke andar object 2 ajayega
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

const obj4 ={...obj1, ...obj2}
console.log(obj4);

const users =[
    {
        id:1,
        email:"gourav"
    }
]
users[0].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));//will return a array
console.log(Object.values(tinderUser));//will return a array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));