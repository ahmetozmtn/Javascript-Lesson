const wordElement = document.getElementById("word");
const popup = document.getElementById("popup-container");
const messageElement = document.getElementById("success-message");

const correctLetters = ["h", "t", "m", "l", "o", "e"];
const wrongLetters = [];
const selectedWord = getRandomWord();

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

window.addEventListener("keydown", (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                console.log("bu harfi zaten kullandınız");
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                console.log("hatalı harfleri güncelle");
            }
        }
    }
});

displayWord();
