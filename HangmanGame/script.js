const wordElement = document.getElementById("word");

const correctLetters = ["h", "t", "m", "l", "o", "e"];
const wrongLetters = [];

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

console.log(getRandomWord());

function displayWord() {
    const selectedWord = getRandomWord();

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
        console.log("You win");
    }
}

displayWord();
