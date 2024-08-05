//let's change value of math.pi
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);
descriptor.writable = true
console.log(descriptor);
descriptor.value = 4
console.log(descriptor.value);

const chai = {
    name:"masala",
    price:'99',
    isAvailable:true
}

const discription = Object.getOwnPropertyDescriptor(chai,"name")
// console.log(discription);
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

