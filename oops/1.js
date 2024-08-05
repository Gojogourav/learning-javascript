const obj = {
    //this is object literal
    username:'gourav',
    loginCound:10,
    signedIn:true,

    getUserDetails : function(){
        console.log("got user details from database");
        console.log(`username : ${this.username}`);
        // console.log(this);//will print current context
    }

}

function user(username,loginCound,signedIn){
    this.username= username
    this.loginCound = loginCound
    this.signedIn = signedIn
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new user('gourav',99,true)
const userTwo = new user('chai',11,false)
//user two will overrite the userOne hence we use new keyword

console.log(userOne);
console.log(userTwo);
// console.log(obj.username);
// console.log(obj.getUserDetails());