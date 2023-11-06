let firstCard = Math.random()*10
let secondCard = Math.random()*4
let sum = firstCard + secondCard
let hasBlackJack = true
let isAlive = false
let message = ""
let cards = [firstCard, secondCard]

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById('sum-el')
let cardEl = document.querySelector("#card-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards:"
    // for (let i = 0; i < cards.length; i++) {
    // cardEl.textContent += cards[i] + " "
    // }
    cards.forEach(element => {
        cardEl.textContent += element + " "
    });
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard() {
    let card = Math.random()*7
    cards.push(card)
    sum += card
    renderGame()
}