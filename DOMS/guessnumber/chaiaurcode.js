const input = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const inputList = document.querySelector('.guesses') 
const remainingGuess = document.querySelector('.lastResult')
const message = document.querySelector('.lowOrHi')
const body = document.querySelector('body')
const paras = document.querySelector('.resultParas')
const wrapper = document.querySelector('#wrapper')
 
let guessArr = []
let gameStart = true 
let count = 1

const generatedNumber = Math.floor(Math.random()*100)+1
if(gameStart){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(input.value)
        
        if(count>=10){
            inputListsFunction(guess)
            messageDisplay(`Maximum chances reached :( , Random number was ${generatedNumber}`)
            endGame(guess)
        }
        else{
            if(isNaN(guess)||guess>100||guess<1){
                alert('Please enter a valid number between 1 and 100')
            }
            else{
                inputComparison(guess)
            }
        }
    })
}


function inputComparison(input){
    //compares the value of input and generated value
    if(input>generatedNumber){
        messageDisplay('Less')
        inputListsFunction(input)
    }
    else if(input<generatedNumber){
        messageDisplay('More')
        inputListsFunction(input)
    }
    else{
        messageDisplay('YOU HAVE WON THE GAMEEEEE!!!  ')
        body.style.backgroundColor = "yellow"
        paras.style.color ="black" 
        remainingGuess.style.color = 'black'
        wrapper.style.backgroundColor = 'blue'
        inputListsFunction(input)
    }
}

function messageDisplay(string){
    //it shows important messages
    message.innerHTML = `<h3>${string}</h3>`
}

function inputListsFunction(guess){
    //shows the list of inputed numbers
    input.value = ``
    inputList.innerHTML+=`${guess}, `
    count++
    remainingGuess.innerHTML = `${11-count}`
}

function endGame(){
    //ends the game
    input.value = ``
    gameStart=false
    input.setAttribute('disabled',``)
}



