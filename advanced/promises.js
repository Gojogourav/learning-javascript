// let url ='https://api.github.com/users/gojogourav'
// const promiseOne = new Promise(function(resolve,reject){
//     //do async task
//     //DB calls, cryptography, network 
//     setTimeout(function(){
//         console.log("Async is complete");
//     },1000)
//     resolve()
// })

// promiseOne.then(function(){
//     console.log("promise is consumed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async task two is resolved");
// })



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai", email:"random@email.com"})
//     },1000)
// }).then(function(user){
//     console.log(user);
// })




// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({usrename:'gourav', password:'123'})
//         }else{
//             reject('ERROR: SOMETHING WENT WRONG')
//         }
//     },2000)
// }).then(function(user){
//     console.log(user);
//     return user.usrename
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.error(error);
// }).finally(function(){
//     console.log("task completelyy");
// })


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "gourav", password: '1234' })
//         } else {
//             reject("ERROR SOMETHING WENT WRONG")//reject means error code always handle it or you get error
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log("Error occured :- ", error);
//     }
// }
// consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/gojogourav')//use await since it takes time to get data from server
//         const data = await response.json()//response.json also takes time to convert that's why use await
//         console.log(data);
//     }
//     catch (error) {
//         console.log("Error ", error);
//     }
// }
// getAllUsers()


fetch('https://api.github.com/users/gojogourav')//will automatically resolve
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))