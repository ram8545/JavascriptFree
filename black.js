let sum = 0
let hasBlackJack = true
let isAlive = false
let message = ""
let cards = []

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById('sum-el')
let cardEl = document.querySelector("#card-el")

let player = {
    name: "Ram",
    chips: "150"
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name +": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
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
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
}