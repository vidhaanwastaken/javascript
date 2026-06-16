let randomNum = Math.floor(Math.random()*100 + 1)

const submitButton = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevG = []
let numGuess = 1

let playGame = true

if(playGame){
    submitButton.addEventListener('click', function(e){
        e.preventDefault()
            const guess =parseInt(userInput.value)
             validateGuess(guess)
  
    })
}

function validateGuess (guess){
if(isNaN(guess)||guess<1||guess>100){
    alert("please enter a valid number")
}
else{
    prevG.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        displaymessage(`game over, random number was: ${randomNum}`)
        gameEnd()
    }else{
        displayGuess(guess)
        checkGuess(guess)

    }
}

}

function checkGuess (guess){
    if(guess === randomNum){
        displaymessage("you guessed it right")
        gameEnd()
    }
    else if(guess < randomNum){
        displaymessage("number is too low")
    }
    
    else if(guess > randomNum){
        displaymessage("number is too high")
    }


}
function displayGuess (guess){
userInput.value = ''
guessSlot.innerHTML += `${guess} ,`
numGuess++;
remaining.innerHTML = `${11- numGuess}`

}
function displaymessage (message){

loworhigh.innerHTML = `<h2>${message}</h2>`
}
function newGame (){
const newgamebutton = document.querySelector('#newGame')
newgamebutton.addEventListener('click', function(e){
    randomNum = Math.floor(Math.random()*100 + 1)
    prevG = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11- numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = false
})

}
function gameEnd(){
userInput.value = ''
userInput.setAttribute('disabled',  '')
p.classList.add('button')
p.innerHTML=`<h2 id = "newGame">start new game</h2>`
startOver.appendChild(p)
playGame = true
newGame()
}