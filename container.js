let container = document.getElementById("container")

function buy() {
    container.innerHTML = "<p>Buy this item</p>"
}

container.innerHTML = "<button onclick=buy()> BUY! </button>"