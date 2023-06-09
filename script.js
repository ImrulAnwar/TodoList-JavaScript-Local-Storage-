const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
  const task = inputBox.value.trim();
  if (task !== "") {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskText = document.createElement("span");
    taskText.textContent = task;
    const crossIcon = document.createElement("span");
    crossIcon.textContent = "x";
    crossIcon.className = "crossIcon";
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(crossIcon);
    listContainer.appendChild(listItem);
    inputBox.value = "";
    saveData();
  } else {
    alert("Please enter a task");
  }
}

listContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("crossIcon")) {
    // Handle cross icon click event
    const listItem = event.target.parentNode;
    listItem.remove();
    saveData();
  } else if (event.target.type === "checkbox") {
    // Handle checkbox click event
    const taskText = event.target.nextElementSibling;
    taskText.classList.toggle("checkedTask");
    saveData();
  }
});

function saveData() {
  const listItems = listContainer.querySelectorAll("li");
  const tasks = [];
  listItems.forEach((listItem) => {
    const checkbox = listItem.querySelector("input[type='checkbox']");
    const taskText = listItem.querySelector("span").textContent;
    const isChecked = checkbox.checked;
    tasks.push({ task: taskText, checked: isChecked });
  });
  localStorage.setItem("data", JSON.stringify(tasks));
}

function showTasks() {
  const savedData = localStorage.getItem("data");
  if (savedData) {
    const tasks = JSON.parse(savedData);
    tasks.forEach((task) => {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const taskText = document.createElement("span");
      taskText.textContent = task.task;
      const crossIcon = document.createElement("span");
      crossIcon.textContent = "x";
      crossIcon.className = "crossIcon";
      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      listItem.appendChild(crossIcon);
      listContainer.appendChild(listItem);
      checkbox.checked = task.checked;
      if (task.checked) {
        taskText.classList.add("checkedTask");
      }
    });
  }
}

showTasks();
