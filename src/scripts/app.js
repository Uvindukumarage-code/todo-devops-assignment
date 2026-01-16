const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const countText = document.getElementById("task-count");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function updateCount() {
  countText.textContent = `${tasks.length} tasks`;
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter = "all") {
  list.innerHTML = "";

  tasks
    .filter(task => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    })
    .forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task.text;

      if (task.completed) {
        li.classList.add("done");
      }

      li.addEventListener("click", () => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks(filter);
      });

      li.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        tasks.splice(index, 1);
        saveTasks();
        renderTasks(filter);
        updateCount();
      });

      list.appendChild(li);
    });

  updateCount();
}

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  tasks.push({ text: input.value, completed: false });
  input.value = "";
  saveTasks();
  renderTasks();
  updateCount();
});

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    renderTasks(filter);
  });
});

renderTasks();
