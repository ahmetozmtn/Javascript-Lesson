"use strict";

let result;

let taskList = [
    { id: 1, taskName: "Task 1", status: "completed" },
    { id: 2, taskName: "Task 2", status: "pedding" },
    { id: 3, taskName: "Task 3", status: "completed" },
    { id: 4, taskName: "Task 4", status: "pedding" },
];

let editId;
let isEditTask = false;

const taskInput = document.querySelector("#txtTaskName");
const btnClear = document.querySelector("#btnClear");

displayTasks();

function displayTasks() {
    let ul = document.getElementById("task-list");
    ul.innerHTML = "";

    if (taskList.length == 0) {
        ul.innerHTML = "<p class='p-3 m-0'>Task not found</p>";
    } else {
        for (let task of taskList) {
            let completed = task.status == "completed" ? "checked" : "";

            let li = `
        <li class="task list-group-item">
            <div class="form-check">
                <input
                    type="checkbox"
                    id="${task.id}"
                    class="form-check-input"
                    ${completed}
                    onclick="updateStatus(this)"
                />
                <label for="${task.id}" class="form-check-label ${completed}"
                    >${task.taskName}</label
                >
            </div>
            <div class="dropdown">
                <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-ellipsis"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a onclick="deleteTask(${task.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                    <li><a onclick='editTask(${task.id}, "${task.taskName}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a></li>
                </ul>
                </div>
        </li>

    `;
            ul.insertAdjacentHTML("beforeend", li);
        }
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
    if (taskInput.value == "") {
        alert("Please enter the task name");
    } else {
        if (!isEditTask) {
            //add
            taskList.push({
                id: taskList.length + 1,
                taskName: taskInput.value,
            });
        } else {
            // update
            for (let task of taskList) {
                if (task.id == editId) {
                    task.taskName = taskInput.value;
                }
                isEditTask = false;
            }
        }

        displayTasks();
        taskInput.value = "";
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

    taskList.splice(deletedId, 1);
    displayTasks();
}

function editTask(taskId, taskName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = taskName;
    taskInput.focus();
    taskInput.classList.add("active");
}

btnClear.addEventListener("click", function () {
    taskList.splice(0, taskList.length);
    displayTasks();
});

function updateStatus(selectedTask) {
    let label = selectedTask.nextElementSibling;
    let status;

    if (selectedTask.checked) {
        label.classList.add("checked");
        status = "completed";
    } else {
        label.classList.remove("checked");
        status = "pending";
    }

    for (let task of taskList) {
        if (task.id == selectedTask.id) {
            task.status = status;
        }
    }
}
