let result;

result = document.getElementsByClassName("task");
result = document.getElementsByClassName("task")[0];
result = document.getElementsByClassName("task")[1];

// taskList = document.getElementsByClassName("task");
// ul = document.getElementById("task-list");
// taskList = ul.getElementsByTagName("li");

taskList = document.querySelectorAll("#task-list li");

// for (let i = 0; i < taskList.length; i++) {
//     console.log(taskList[i]);
// }

for (let task of taskList) {
    console.log(task);
    task.style.color = "blue";
    task.style.fontSize = "20px";
    // task.innerHTML = "Item";
}

// console.log(result);
