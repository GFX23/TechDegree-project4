/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0
        this.phrases = [new Phrase("You Lose"), new Phrase("You Win"), new Phrase("Play Again"),
                        new Phrase("Game Over"), new Phrase("Good Luck")] 
        this.activePhrase = null
    }

    startGame() {
        document.querySelector("#overlay").style.display = "none"
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }

    getRandomPhrase() {
        const randomNum = Math.floor(Math.random()) * this.phrases.length
        return phrases[randomNum]
    }

    handleInteraction() {
        const keys = document.querySelectorAll(".key")
        keys.forEach(key => {
            key.addEventListener("click", e => {
                e.target.addAtributte("disabled", true)
                if (!this.activePhrase.checkLetter(e.target.innerHTML)) {
                    e.target.classList.add("wrong")
                    this.removeLife()
                } else {
                    e.target.classList.add("chosen")
                    this.activePhrase.showMatchedLetter(e.target.innerHTML)
                    if(this.checkForWin()) {
                        this.gameOver()
                    }
                }
            })
        })
    }

    removeLife() {
        const tries = document.querySelectorAll(".tries")
        tries[this.missed].setAttribute("src", "images/lostHeart.png")
        this.missed += 1
        if (this.missed === 5) {
            this.gameOver()
        }
    }

    checkForWin() {
        return document.querySelectorAll(".letter hide").length === 0
    }

    gameOver() {
        document.querySelector("#overlay").style.display = "none"
    }
}
