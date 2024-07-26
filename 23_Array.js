// [(),(),()]
//for of it will have values not keys

// const arr = [1,2,3,4,5]
// for(const i of arr){
//     console.log(i);
// }

// const greetings = "Hello world"
// for(let i of greetings){
//     console.log(i);
// }

//MAPS
//IMPORTANT
const map = new Map()
map.set('IN',"india")
map.set('GBP',"British pound sterling")
map.set('USD',"United States Dollar")

for(let [key,value] of map){
    console.log(`key : ${key}  value : ${value}`);
}

const myObject = {
    'game1':'gta',
    'game2':'cod'
}
//for objects use for in instead of for of
for(let i in myObject){
    console.log(`${i} : ${myObject[i]}`);
}
//FOR IN LOOPS PRINTS KEYS
myArr=[1,2,3,4,5]
for(let i in myArr){
    console.log(myArr[i]);
}
for(let i in map){
    console.log(`${i} : ${map[i]}`);
}
//for in loop doesn't work in maps so use for of in maps



//
const coding = ["js",'ruby','java']
coding.forEach(function (val){
    console.log(val);
})

coding.forEach((i)=>{
    console.log(i);
})

coding.forEach((item,index,array)=>{
    console.log(item,index,array);
})

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(`languageFileName: ${item[languageFileName]}`);
    console.log(`languageName: ${item.languageName}`);
})