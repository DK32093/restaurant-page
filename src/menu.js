export function menu() {
    const content = document.getElementById("content")
    content.innerHTML = ""
    const titleCard = document.createElement("div")
    titleCard.setAttribute("class", "titleCard")
    const restName = document.createElement("h1")
    restName.innerText = "Menu"
    const intro = document.createElement("h2")
    intro.innerText = "Breakfast is served all day!"
    titleCard.append(restName, intro)
    content.style.backgroundImage = 'url("https://static.vecteezy.com/system/resources/previews/013/860/284/original/hand-drawn-cartoon-coffee-with-beans-free-png.png")';
    content.style.backgroundSize = "10rem 10rem"
    content.style.backgroundRepeat = "repeat-xy"
    const gridContainer = document.createElement("div")
    gridContainer.setAttribute("class", "gridContainer")
    for (let i = 1; i < 10; i++) {
        const homeCard = document.createElement("div")
        const menuCard = document.createElement("div")
        const cartButton = document.createElement("button")
        const priceCard = document.createElement("div")
        const imgCard = document.createElement("div")
        imgCard.style.backgroundImage = 'url(https://webstockreview.net/images/burrito-clipart-11.png)'
        imgCard.style.backgroundSize = "15rem 15rem"
        imgCard.style.backgroundRepeat = "none"
        priceCard.innerText = "$8"
        cartButton.innerText = "+"
        cartButton.title = "Add to cart"
        menuCard.innerText = "Burrito"
        homeCard.setAttribute("class", "homeCard")
        menuCard.setAttribute("class", "menuCard")
        cartButton.setAttribute("class", "cartButton")
        priceCard.setAttribute("class", "priceCard")
        imgCard.setAttribute("class", "imgCard")
        menuCard.append(cartButton)
        homeCard.append(menuCard, priceCard, imgCard)
        gridContainer.append(homeCard)
    }
    content.append(titleCard, gridContainer)
};
