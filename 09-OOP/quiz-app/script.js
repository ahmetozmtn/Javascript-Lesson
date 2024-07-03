// let soru = {
//     soruMetni: "JS paket yönetim sistemi nedir?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "NPM",
//         c: "Yarn",
//     },
//     cevap: "b",
//     cevapKontrolEt: function (cevap) {
//         return cevap == this.cevap;
//     },
// };

// let soru2 = {
//     soruMetni: ".net paket yönetim sistemi nedir?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Nuget",
//         c: "Pip",
//     },
//     cevap: "b",
//     cevapKontrolEt: function (cevap) {
//         return cevap == this.cevap;
//     },
// };

// console.log(soru.soruMetni);
// console.log(soru.cevapKontrolEt("c"));
// console.log(soru2.cevapKontrolEt("b"));

function Question(quizText, answers, correctAnswer) {
    this.quizText = quizText;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.checkAnswer = function (answer) {
        return answer == this.correctAnswer;
    };
}

let question1 = new Question(
    "JS paket yönetim sistemi nedir?",
    { a: "Node.js", b: "NPM", c: "Yarn" },
    "b"
);

let question2 = new Question(
    ".net paket yönetim sistemi nedir?",
    { a: "Node.js", b: "Nuget", c: "Pip" },
    "b"
);

let Questions = [
    new Question(
        "JS paket yönetim sistemi nedir?",
        { a: "Node.js", b: "NPM", c: "Yarn" },
        "b"
    ),
    new Question(
        "JS paket yönetim sistemi nedir?",
        { a: "Node.js", b: "NPM", c: "Yarn" },
        "b"
    ),
    new Question(
        "JS paket yönetim sistemi nedir?",
        { a: "Node.js", b: "NPM", c: "Yarn" },
        "b"
    ),
];

for (let q of Questions) {
    console.log(q.quizText);
    console.log(q.answers);
    console.log(q.correctAnswer);
}

console.log(question1.quizText);
console.log(question1.answers);
console.log(question1.correctAnswer);
console.log(question1.checkAnswer("c"));
console.log(question2.checkAnswer("b"));
