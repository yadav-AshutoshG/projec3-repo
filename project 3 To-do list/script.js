document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Add task function
    function addTask() {
        const taskText = taskInput.value;
        if (taskText.trim() === "") return; // Don't add empty tasks

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <span class="delete">X</span>
        `;
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = "";

        // Delete task on "X" click
        listItem.querySelector(".delete").addEventListener("click", function() {
            listItem.remove();
        });
    }
    addTaskButton.addEventListener("click", addTask);

    // Add task when the "Enter" key is pressed
    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
