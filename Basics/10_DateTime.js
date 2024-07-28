//Dates

let myDate = new Date()
console.log(myDate.toString());//shows location 
console.log(myDate.toUTCString());//domt show location
console.log(typeof myDate);//type is object

let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());//month starts from 0 in js

let newCreatedDate = new Date("01-14-2023")
console.log(newCreatedDate.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);//will get time in ms from 1970 jan 1
console.log(myCreatedDate.getTime());//will get time in ms from 1970 jan 1
console.log(Math.floor(timeStamp/1000));//to convert ms to s

// the following is very useful so pls remember it
newCreatedDate.toLocaleString('default',{
    weekday:"long"
})