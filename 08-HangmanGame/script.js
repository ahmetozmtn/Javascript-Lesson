const wordElement = document.getElementById("word");
const popup = document.getElementById("popup-container");
const messageElement = document.getElementById("success-message");
const wrongLettersElement = document.getElementById("wrong-letters");
const items = document.querySelectorAll(".item");
const message = document.getElementById("message");
const playAgain = document.getElementById("play-again");

const correctLetters = ["h", "t", "m", "l", "o", "e"];
const wrongLetters = [];
let selectedWord = getRandomWord();

function getRandomWord() {
    const words = [
        "hello",
        "world",
        "javascript",
        "html",
        "css",
        "python",
        "java",
    ];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    wordElement.innerHTML = `
        ${selectedWord
            .split("")
            .map(
                (letter) => `
             <div class="letter">
                ${correctLetters.includes(letter) ? letter : ""}
            </div>
        `
            )
            .join("")}
       
    `;

    const w = wordElement.innerText.replace(/\n/g, "");
    if (w === selectedWord) {
        popup.style.display = "flex";
        messageElement.innerText = "You Won!";
    }
}

function updateWrongLetters() {
    wrongLettersElement.innerHTML = `
        ${wrongLetters.length > 0 ? "<h3>Hatalı harfler</h3>" : ""}
        ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
    `;

    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;

        if (index < errorCount) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
    if (wrongLetters.length === items.length) {
        popup.style.display = "flex";
        messageElement.innerText = "You Lost!";
    }
}

function displayMessage() {
    message.classList.add("show");
    setTimeout(() => {
        message.classList.remove("show");
    }, 1000);
}

playAgain.addEventListener("click", () => {
    correctLetters.length = 0;
    wrongLetters.length = 0;
    selectedWord = getRandomWord();
    displayWord();
    updateWrongLetters();
    popup.style.display = "none";
});

window.addEventListener("keydown", (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                displayMessage();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetters();
            } else {
                displayMessage();
            }
        }
    }
});

displayWord();
