let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")
// console.log('sumEl', sumEl);

function add() {
    console.log("button clicked");
    sumEl.textContent =  num1 + num2
}

function subtract() {
    sumEl.textContent = num1 - num2
}

function multiply() {
    sumEl.textContent = num1 * num2
}

function divide() {
    sumEl.textContent = num1 / num2
}
