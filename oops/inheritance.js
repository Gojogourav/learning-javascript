class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }

}


class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new teacher('chai','chai@email.com','1234')
console.log(chai);
chai.addCourse()

const massalaChai = new User('MasalaChai')
console.log(massalaChai.logMe());
// console.log(massalaChai.addCourse());  this will give error

console.log(chai=== massalaChai);//false
console.log(chai=== teacher);//false since it's a instance
console.log(chai instanceof teacher);//true since it's a instance