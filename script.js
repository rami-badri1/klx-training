const input = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// add event listener to call addTask
addButton.addEventListener("click", addTask);

// Load tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", function() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        renderTask(task.text, task.completed);
    });
});

function renderTask(text, completed) {
    const newTask = document.createElement("li");
    newTask.textContent = text;
    if (completed) newTask.classList.add("completed");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "V";
    completeBtn.classList.add("task-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("task-btn");

    completeBtn.addEventListener("click", function() {
        newTask.classList.toggle("completed");
        updateLocalStorage();
    });
    deleteBtn.addEventListener("click", function() {
        newTask.remove();
        updateLocalStorage();
    });

    newTask.appendChild(completeBtn);
    newTask.appendChild(deleteBtn);
    list.appendChild(newTask);
}

function addTask() {
    if (input.value.trim() === "") {
        return;
    }
    renderTask(input.value, false);
    updateLocalStorage();
    input.value = "";
}

function updateLocalStorage() {
    const tasks = [];
    list.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.childNodes[0].nodeValue,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}