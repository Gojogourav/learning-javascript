// Stack(primitive data type), Heap (Non-Primitive)

let name = "Gourav"
let anotherName = name
anotherName = "tipu"
console.log(anotherName);
console.log(name);
// since string is primitive datatype the value of name is copied into anotherNamem hence changing one doesnt affect other

// the following is a refrence datatype
let usr = {
    email: "usr@gmail.com",
    phno: 1234567890
}
let usr2 = usr
usr2.email = "usr2@outlook.com"
// since usr is a reference datatype when the usr2 changes data it will affect the usr 
console.log(usr.email);
console.log(usr2.email);