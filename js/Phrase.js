/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase
    }

    addPhraseToDisplay() {
        const ul = document.querySelector("ul")
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === " ") {
                const li = document.createElement("li")
                li.innerHTML = " "
                li.classList.add("space")
                ul.appendChild(li)
            } else {
                const li = document.createElement("li")
                li.innerHTML = `${this.phrase[i]}`
                li.classList.add(`hide letter ${this.phrase[i]}`)
                ul.appendChild(li)
            }
        }
    }

    checkLetter(letter) {
        return this.phrase.toLowerCase().includes(letter)
    }

    showMatchedLetter(letter) {
        const phraseLetters = document.querySelectorAll(".letter")
        phraseLetters.forEach(pLetter => {
            if (this.checkLetter(letter)) {
                pLetter.classList.remove("hide")
                pLetter.classList.add("show")
            }
        })
    }
}