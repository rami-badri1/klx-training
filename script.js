const input = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// add event listener to call addTask
addButton.addEventListener("click", addTask);

function addTask() {
    // check that the input isnt empty
    if (input.value.trim() === "") {
        return;
    }

    // create a new <li> with the task text
    const newTask = document.createElement("li");
    newTask.textContent = input.value;

    // create buttons

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "V";
    completeBtn.classList.add("task-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("task-btn");

    // add event listeners to the buttons
    completeBtn.addEventListener("click", function() {
        newTask.classList.toggle("completed");
    });
    deleteBtn.addEventListener("click", function() {
        newTask.remove();
    });

    // append buttons to <li>
    newTask.appendChild(completeBtn);
    newTask.appendChild(deleteBtn);
    // append <li> to <ul>
    list.appendChild(newTask);
    // clear input field 
    input.value = "";
}