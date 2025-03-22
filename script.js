// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("task-input").value;
    let taskDate = document.getElementById("task-date").value;
    let taskPriority = document.getElementById("task-priority").value;

    if (taskInput.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    let taskList = document.getElementById("task-list");
    let listItem = document.createElement("li");
    listItem.classList.add("task-item");

    // Create a span to hold the task text
    let taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.textContent = taskInput;

    // Create a small span for date and priority
    let taskDetails = document.createElement("small");
    taskDetails.classList.add("task-details");
    taskDetails.textContent = `(Due: ${taskDate || "No date"}) [${taskPriority}]`;

    // Create buttons container
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("task-buttons");

    // Complete Button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete-btn");
    completeBtn.onclick = () => completeTask(listItem);

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = () => editTask(taskSpan, taskDetails);

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteTask(listItem);

    // Append buttons to the container
    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    // Append elements to the task item
    listItem.appendChild(taskSpan);
    listItem.appendChild(taskDetails);
    listItem.appendChild(buttonContainer);

    // Append task item to the list
    taskList.appendChild(listItem);

    // Clear input fields after adding
    document.getElementById("task-input").value = "";
    document.getElementById("task-date").value = "";
}

// Function to mark a task as completed
function completeTask(taskItem) {
    taskItem.classList.toggle("completed");
}

// Function to edit only the task text (date & priority remain unchanged)
function editTask(taskSpan, taskDetails) {
    let newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskSpan.textContent = newTask.trim();
    }
}

// Function to delete a task
function deleteTask(taskItem) {
    taskItem.remove();
}
