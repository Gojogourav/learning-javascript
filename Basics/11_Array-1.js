//Array

const myArr = [1,2,3,4,5]
// it's a reference type 
const myArr2 = new Array(1,2,3,4,5,6,7)
// console.log(myArr[2]);
// myArr.push(10)
// myArr.push(8)
// console.log(myArr);
// myArr.pop()

myArr.unshift(9)//inserts 9 at the start of the array very timeconsuming 
myArr.shift()//removes the starting element of array

console.log(myArr);
// if element doesn't exist it will return -1
console.log(myArr.indexOf(3));

//new arr copy elements in string format
const newArr = myArr.join()
console.log(typeof newArr);


//slice and splice
//last wont be included in slice and it doesn't manipulate the original array
console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log("B",myArr);
console.log(myn1);

//last element will be included in splice and original element is manipulated
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);
