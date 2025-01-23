export function about() {
    const content = document.getElementById("content")
    content.innerHTML = ""
    content.style.backgroundImage = 'none'
    const titleCard = document.createElement("div")
    titleCard.setAttribute("class", "titleCard")
    const restName = document.createElement("h1")
    restName.innerText = "About us"
    const intro = document.createElement("h2")
    intro.innerText = "Our story"
    titleCard.append(restName, intro)
    const aboutGridContainer = document.createElement("div")
    aboutGridContainer.setAttribute("class", "aboutGridContainer")
    for (let i = 1; i < 4; i++) {
        const homeCard = document.createElement("div")
        const menuCard = document.createElement("div")
        homeCard.setAttribute("class", "homeCard")
        menuCard.setAttribute("class", "menuCard")
        menuCard.innerText = "Here is some helpful information"
        homeCard.append(menuCard)
        aboutGridContainer.append(homeCard)
    }
    content.append(titleCard, aboutGridContainer)
};