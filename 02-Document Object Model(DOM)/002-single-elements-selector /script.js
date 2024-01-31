let result;

result = document.getElementById("title"); // id'si title olan elementi getirir.
result = document.getElementById("title").id; // id'si title olan elementin id'sini getirir.
result = document.getElementById("title").className; // id'si title olan elementin class'ını getirir.
result = document.getElementById("title").classList; // id'si title olan elementin class listesini getirir.
result = document.getElementById("title").classList[0];

document.getElementById("title").style.fontSize = "30px"; // id title olan elementin font size 30px yapar
document.getElementById("title").style.color = "blue";
// document.getElementById("title").style.display = "none";

document.getElementById("title").innerText = "Todo App 2";
document.getElementById("title").innerHTML = "<p>Todo App 2</p>";

result = document.querySelector("#title");
result = document.querySelector(".card-header");
result = document.querySelector("div"); // sayfadaki ilk div'i getirir.

result = document.querySelector("li");
result = document.querySelector("li:first-child");
result = document.querySelector("li:last-child");
result = document.querySelector("li:nth-child(2)");

console.log(result);
