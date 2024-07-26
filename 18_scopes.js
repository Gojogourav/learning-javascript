//the var is declared globally so don't use it 
let a= 300
if(true){
    let a =10
    const b=20
    var c=30
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "gourav"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "gourav"
    if(username=="gourav"){
        const website = " youtube"
        console.log(username+website);
    }
}

//*************Interesting*********************

function addone(value){
    return value+1
}
console.log(addone(5));


//you cannot access the below function before declaring it
const addTwo = function(num){
    return num+2
}

addTwo(5)