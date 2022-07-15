const form = document.getElementById("create-task-form");
form.addEventListener("submit", (event) => {
    // don't refresh page on submit
    event.preventDefault();

    // grab what's in the input field
    const input = document.getElementById("new-task-description").value;

    // grab the task list & append user input as <li>
    const taskList = document.getElementById("tasks");
    const newItem = document.createElement("li");
    newItem.innerHTML = input;
    taskList.appendChild(newItem);
});