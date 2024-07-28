const name = "gourav"
const repoCount = 50
console.log(name+" value "+repoCount);
// don't use this

//use this instead
console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String('Gourav Biswal')
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString =  gameName.substring(0,6)
// it doesn't follow negative values
// last one is not included
console.log(newString);

const anotherName = gameName.slice(-13,4)
// four characters from behind
console.log(anotherName);

const username = "   gojokaneki   "
// only trims white spaces
console.log(username.trim());

const url = "https://google%20hindi.com"
console.log(url.replace('%20','-'));
console.log(url.includes("hindi"));
console.log(gameName.split("")); //search mdn reference