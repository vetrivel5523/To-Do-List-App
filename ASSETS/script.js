// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task Functionality
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement("li");

        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "🗑️";

        removeBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(taskContent);
        li.appendChild(removeBtn);

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
});
