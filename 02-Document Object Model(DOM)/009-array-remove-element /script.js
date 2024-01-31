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
            <div class="dropdown">
                <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a onclick="deleteTask(${task.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
                </ul>
                </div>
        </li>

    `;
        ul.insertAdjacentHTML("beforeend", li);
    }
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document
    .querySelector("#btnAddNewTask")
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

function deleteTask(id) {
    let deletedId;
    for (let index in taskList) {
        if (taskList[index].id == id) {
            deletedId = index;
        }
    }

    // deletedId = taskList.findIndex(function (task) {
    //     return task.id == id;
    // });

    // arrow function
    // deletedId = taskList.findIndex((task) => task.id == id);

    taskList.splice(deletedId, 1);
    displayTasks();
}
