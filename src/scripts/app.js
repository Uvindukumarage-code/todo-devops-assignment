// Select elements
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const filterBtns = document.querySelectorAll(".filter-btn");
const taskCount = document.getElementById("taskCount");
const darkToggle = document.getElementById("darkToggle");

let currentFilter = "all";

// Add new task
addBtn.addEventListener("click", addTask);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = todoInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  // Toggle completed
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateCounter();
    applyFilter();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "✖";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateCounter();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  todoInput.value = "";
  updateCounter();
}

// Update remaining task count
function updateCounter() {
  const tasks = document.querySelectorAll("#todoList li");
  const remaining = document.querySelectorAll(
    "#todoList li:not(.completed)"
  ).length;

  taskCount.textContent = `${remaining} tasks remaining`;
}

// Filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    applyFilter();
  });
});

function applyFilter() {
  const tasks = document.querySelectorAll("#todoList li");

  tasks.forEach((task) => {
    task.classList.remove("hidden");

    if (currentFilter === "active" && task.classList.contains("completed")) {
      task.classList.add("hidden");
    }

    if (currentFilter === "completed" && !task.classList.contains("completed")) {
      task.classList.add("hidden");
    }
  });
}

// Dark mode toggle
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkToggle.textContent = "☀️";
  } else {
    darkToggle.textContent = "🌙";
  }
});

