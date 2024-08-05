class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    //the following is method
    encryptPassowrd(){
        return `${this.password}abc`
    }

    usernameCapitalizer(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai',"chai@email.com",'123')
console.log(chai.encryptPassowrd());
console.log(chai.usernameCapitalizer());

//behind the scene

function User2(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassowrd = function(){
    return `${this.password}abc`
}
const tea = new User2('tea','tea@email.com','123')
console.log(tea.encryptPassowrd());

