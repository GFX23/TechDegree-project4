/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase
    }

// Creating element for each "letter" in phrase, depending on char or space
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
                li.classList.add("hide", "letter", `${this.phrase[i].toLowerCase()}`)
                ul.appendChild(li)
            }
        }
    }

// Just checking if phrase includes passed letter
    checkLetter(letter) {
        return this.phrase.toLowerCase().includes(letter)
    }

// After succesfull match, will set element class to "show", while removing "hide" class , passed "letter" is innerHMTL of "key" element
    showMatchedLetter(letter) {
        const phraseLetters = document.querySelectorAll(".letter")
        phraseLetters.forEach(pLetter => {
            if (letter === pLetter.innerHTML.toLowerCase()) {
                pLetter.classList.remove("hide")
                pLetter.classList.add("show")
            }
        })
    }
}