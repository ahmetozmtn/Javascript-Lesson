"use strict";

let result;

let taskList = [
    { id: 1, taskName: "Task 1" },
    { id: 2, taskName: "Task 2" },
    { id: 3, taskName: "Task 3" },
    { id: 4, taskName: "Task 4" },
];

displayTasks();

function displayTasks() {
    let ul = document.getElementById("task-list");
    ul.innerHTML = "";

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
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document
    .querySelector("#btnDeleteTask")
    .addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            document.getElementById("btnAddNewTask").click();
        }
    });
// doc: https://www.w3schools.com/jsref/event_onkeypress.asp

function newTask(event) {
    let taskInput = document.querySelector("#txtTaskName");
    if (taskInput.value != "") {
        taskList.push({ id: taskList.length + 1, taskName: taskInput.value });
        displayTasks();
        taskInput.value = "";
    } else {
        alert("Please enter the task name");
    }

    event.preventDefault();
}
