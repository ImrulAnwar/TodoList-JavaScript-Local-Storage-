const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
  const task = inputBox.value;
  console.log(task);
  if (task !== "") {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskText = document.createElement("span");
    taskText.textContent = task;
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listContainer.appendChild(listItem);
    inputBox.value = "";
  } else {
    alert("Please enter valid task");
  }
}
