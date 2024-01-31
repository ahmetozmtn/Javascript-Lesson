"use strict";

let result;

let ul = document.getElementById("task-list");

let taskList = [
    { id: 1, taskName: "Task 1" },
    { id: 2, taskName: "Task 2" },
    { id: 3, taskName: "Task 3" },
    { id: 4, taskName: "Task 4" },
];

// count = ul.children.length;

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
