function multiply5(num) {
    return num * 5
}
multiply5.power = 2

console.log(multiply5.power);
console.log(multiply5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

// Creating a New Object: The new keyword first creates a new, empty object.
// Setting the Prototype: It sets the new object's prototype to the constructor function's prototype.
// Binding this: The constructor function initializes the new object by binding this to it.
// Returning the Object: The newly created object is returned.

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()

// Prototype Property: Every JavaScript function has a prototype property that is used to attach properties and methods that should be inherited by instances of that function. This is especially relevant for constructor functions.

// Prototype Chain: When you try to access a property on an object, JavaScript first looks for the property on the object itself. If it doesn't find it there, it then looks at the object's prototype, and then the prototype's prototype, and so on, until it reaches the end of the chain. This chain of references is called the prototype chain.

// proto: Every object has an internal property called __proto__ (or [[Prototype]] in modern terminology), which points to its prototype object. This is what forms the prototype chain.

// Inheritance: Through the prototype chain, objects can inherit properties and methods from other objects. This is how inheritance is implemented in JavaScript.