const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","batman","flash"]
// marvel_heroes.push(dc_heroes) 
// there will be array in array 
// when we use push it will get pushed into existing array

console.log(marvel_heroes);

// when we conat we get a new array 
const Heroes= marvel_heroes.concat(dc_heroes)
console.log(Heroes);

// use this insted since it's more efficient(spread operator)
const all_new_heores = [...marvel_heroes,...dc_heroes]
console.log(all_new_heores);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// will spreadout all the element inside the array
const real_another_array = anotherArr.flat(Infinity)

console.log(Array.isArray("gourav"));
console.log(Array.from("gourav"));//will create array of each characters in the string
console.log(Array.from({name:"gourav"}));//will return empty array since it doesn't know what to make array of key/value[DOUBT]
 
let score1=100
let score2=200
let score3=300
ArrScore =[score1,score2,score3]
// Array.of returns a new array
console.log(Array.of(score1,score2,score3));