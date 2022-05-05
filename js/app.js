/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Creating empty variable which can be assigned via event handler

let game = {}

/* Setting event handler for "reset" button
    - creating new Game object
    - if there is class "win" or "lose", then handler will:
        a) reset "letter" elements
        b) restore disable attribute of "key" elements
        c) reset right picture for life count
    - starting game
*/
document.querySelector("#btn__reset").addEventListener("click", () => {
    game = new Game()
    const overlay = document.querySelector("#overlay")
    if (!overlay.classList.contains("start")) {
        document.querySelector("ul").replaceChildren()
        document.querySelectorAll(".key").forEach(key => {
            key.className = "key"
            key.disabled = false
        })
        document.querySelectorAll(".tries").forEach(heart => {
            heart.firstChild.setAttribute("src", "images/liveHeart.png")
        })
    }
    game.startGame()
})

// Adding event listener to "key"s and passing event into game handler

document.querySelectorAll(".key").forEach(keys => {
    keys.addEventListener("click", event => {
    game.handleInteraction(event.target.innerHTML)
    })
})

document.addEventListener("keyup", event => {
    game.handleInteraction(event.key)
})