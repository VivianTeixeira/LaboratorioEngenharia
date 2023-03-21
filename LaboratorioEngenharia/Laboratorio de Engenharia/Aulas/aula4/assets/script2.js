let tasks = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value;
    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        updateTaskList();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function moveTaskUp(index) {
    if (index > 0) {
        let temp = tasks[index];
        tasks[index] = tasks[index - 1];
        tasks[index - 1] = temp;
        updateTaskList();
    }
}

function moveTaskDown(index) {
    if (index < tasks.length - 1) {
        let temp = tasks[index];
        tasks[index] = tasks[index + 1];
        tasks[index + 1] = temp;
        updateTaskList();
    }
}

function updateTaskList() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let taskText = tasks[i];
        let li = document.createElement("li");
        li.innerHTML = taskText;
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "excluir";
        deleteButton.onclick = function () {
            deleteTask(i);
        }
        li.appendChild(deleteButton);
        if (i > 0) {
            let upButton = document.createElement("button");
            upButton.innerHTML = "⇡";
            upButton.onclick = function () {
                moveTaskUp(i);
            }
            li.appendChild(upButton);
        }
        if (i < tasks.length - 1) {
            let downButton = document.createElement("button");
            downButton.innerHTML = "⇣";
            downButton.onclick = function () {
                moveTaskDown(i);
            }
            li.appendChild(downButton);
        }
        taskList.appendChild(li);
    }
}
