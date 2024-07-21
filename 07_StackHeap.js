// Stack(primitive data type), Heap (Non-Primitive)

let name = "Gourav"
let anotherName = name
anotherName="tipu"
console.log(anotherName);
console.log(name);
// since string is primitive datatype the value of name is copied into anotherNamem hence changing one doesnt affect other

// the following is a refrence datatype
let usr={
    email:"usr@gmail.com",
    phno:1234567890
}
let usr2 = usr1
usr2.email="usr2@outlook.com"
// the value of both will be changed 
console.log(usr.email);
console.log(usr2.email);