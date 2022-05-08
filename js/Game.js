/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 

 Game object consist of three constructor items: 
    - missed quesess ("missed prop")
    - phrases which consist from 5 objects from Phrase class
    - activePhrase will be set in future via getRandomPhrase function, initial value should be null

 */
class Game {
    constructor() {
        this.missed = 0
        this.phrases = [new Phrase("Javascript is one of the most popular languages"),
                        new Phrase("Using HTML and CSS you can achieve brilliant design"), 
                        new Phrase("Object oriented programming in JS is fake"),
                        new Phrase("Baldness is sign of very senior Fullstack JS programmer"),
                        new Phrase("Fullstack JS looks as good way to go")] 
        this.activePhrase = null
    }

// Starting game with hiding "overlay" and revealing game desk, also setting random Phrase
//    and rendering phrase letters to screen

    startGame() {
        document.querySelector("#overlay").style.display = "none"
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }

// Just random selecting of phrase

    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNum]
    }

// Handling event - letter = passed letter from app.js
// handling contains two options, which both will disable event button:
//      1) if letter doesnt match phrase, then setting "wrong" class and removing life count
//      2) if there is match, setting "chosen" class and checking for win
//

    handleInteraction(letter) {
        document.querySelectorAll(".key").forEach(key => {
            if (key.innerHTML === letter) {
                key.disabled = true
                if (!this.activePhrase.checkLetter(letter)) {
                    key.classList.add("wrong")
                    this.removeLife()
                } else {
                    key.classList.add("chosen")
                    this.activePhrase.showMatchedLetter(letter)
                    this.checkForWin()
                    if(this.checkForWin()) {
                    this.gameOver()
                    }
                }
            }      
        })
    }

// Increase missed count, replacing image, checking for life count, if there is 5 missed quesses => gameover

    removeLife() {
        const tries = document.querySelectorAll(".tries")
        tries[tries.length -1 - this.missed].firstChild.setAttribute("src", "images/lostHeart.png")
        this.missed += 1
        if (this.missed === 5) {
            this.gameOver()
        }
    }

// Checking for win via hidden letters count

    checkForWin() {
        return (document.querySelectorAll(".hide").length === 0)
    }

/*  - Setting display style of overlay to hide game desk, 
    - Removing start class (which we check in "click" handler)
    - Showing WIN/LOSE screen and setting color based on result
*/

    gameOver() {
        document.querySelector("#overlay").style.display = ""
        document.querySelector("#overlay").classList.remove("start")
        if (this.checkForWin()) {
            document.querySelector("#game-over-message").innerHTML = `You Win! <br>You have missed ${this.missed} times!` 
            document.querySelector("#overlay").classList.add("win")
        } else {
            document.querySelector("#game-over-message").innerHTML = `You Lost! <br> There was only ${document.querySelectorAll(".hide").length} more left!`
            document.querySelector("#overlay").classList.add("lose")
        }

    }
}
