'use strict';

// document.querySelector('.message').textContent = 'Correct Number!'
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10
// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.message').textContent)

let secretNumber = Math.trunc(Math.random() * 100 + 1)
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}
let score = 20
let highscore = 0
// document.querySelector('.number').textContent = secretNumber
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    // When there is no input    
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number' 
        displayMessage('No Number!')
    } 
    
    // When player wins
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber
        // document.querySelector('.message').textContent = 'Correct Number!'
        displayMessage('Correct Number!')
        document.querySelector('body').style.backgroundColor=  '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    } 

    // When input is wrong
    else if (guess != secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!'
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')
            score--
            document.querySelector('.score').textContent = score
          }else {
            // document.querySelector('.message').textContent = 'You lost the game!'
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0
          }     
        }
    }) 


document.querySelector('.again').addEventListener('click', function() {
    score = 20
    secretNumber = Math.trunc(Math.random() * 100 + 1)
    // document.querySelector('.number').textContent = secretNumber
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score
    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...')
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor='#222'

})
