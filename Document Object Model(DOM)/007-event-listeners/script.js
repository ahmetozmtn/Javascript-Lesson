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

// document.querySelector("#btnClear").addEventListener("click", function (event) {
//     console.log("clear event");

//     event.preventDefault();
// });

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);

function newTask(event) {
    // console.log(event.target);
    event.target.classList.add("btn-danger");
    event.preventDefault();
}
