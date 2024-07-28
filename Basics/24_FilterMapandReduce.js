const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(values);//it doesn't return anything

//for each doesn't return anything so you use filter insted
//if put under parenthisis it'll get returned automatically
//if put under curly braces it wont you'll return manually
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newNums = myNums.filter((num) => num > 4)
let newNums2 = myNums.filter((num) => {
    return num > 4
})
// console.log(newNums2);

const newArr = []

myNums.forEach((item) => {
    if (item > 4) {
        newArr.push(item)
    }
})

// console.log(newArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let userBooks = books.filter((item)=>item.genre=='History')

// console.log(userBooks);

// userBooks.forEach((item)=>{
//     console.log(item.genre+" : "+item.title);
// })

userBooks = books.filter((items)=>{
    return items.genre == "History" && items.publish>=1995
})
console.log(userBooks);

userBooks.forEach((item)=>{
    console.log(item["title"]);
})

//***********************************************************

myNums = [1,2,3,4,5,6,7]
//map always returns a value
// newNums = myNums.map((num)=>num+20)
// console.log(newNums);

newNums = myNums.map((num)=>num*10).map((item)=>item+1).filter((num)=> num>30)
console.log(newNums);

//******************************************************************* */

//REDUCE

myNums = [1,2,3,4,5,6,7]
const myTotal = myNums.reduce((acc,crrval)=>{
    console.log(`acc : ${acc} current value : ${crrval}`);
    return acc+crrval
},0)//,0 gives value to accumulator
console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price : 299
    },
    {
        itemName:"python",
        price : 199
    },
    {
        itemName:"cpp",
        price : 100
    },
]
const total = shoppingCart.reduce((accumulator,item)=>{
    return accumulator+item.price
},0)
console.log(total);