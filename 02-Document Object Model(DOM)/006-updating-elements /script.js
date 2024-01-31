"use strict";

let result;

let ul = document.getElementById("task-list");

let taskList = [
    { id: 1, taskName: "Task 1" },
    { id: 2, taskName: "Task 2" },
    { id: 3, taskName: "Task 3" },
    { id: 4, taskName: "Task 4" },
];

for (let task of taskList) {
    let li = `
    <li class="task list-group-item">
        <div class="form-check">
            <input
                type="checkbox"
                id="${task.id}"
                class="form-check-input"
            />
            <label for="${task.id}" class="form-check-label"
                >${task.taskName}</label
            >
        </div>
    </li>

`;
    ul.insertAdjacentHTML("beforeend", li);
}

// document.querySelector("#task-list").parentElement.remove();  // elementi siler
// document.querySelector("#task-list").children[0].remove();
// document.querySelector("#task-list").children[1].remove();

// document.querySelector("#task-list").removeAttribute("class");  // class attribute siler
// document.querySelector("#task-list").children[1].removeAttribute("class");
// document.querySelector("#task-list").children[1].setAttribute("class", "aaa"); // attribute set etmemizi sağlar
result = document.querySelector("#task-list").children[1].classList[0];
result = document
    .querySelector("#task-list")
    .children[1].classList.add("bg-danger");
// result = document
//     .querySelector("#task-list")
//     .children[1].classList.remove("bg-danger");
result = document
    .querySelector("#task-list")
    .children[1].classList.contains("bg-danger"); // element de ilgili class arar.

console.log(result);
