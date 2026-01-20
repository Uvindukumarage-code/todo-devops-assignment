
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const count = document.getElementById("task-count");

let todos = [];

function updateCount() {
  count.textContent = `${todos.length} tasks`;
}

function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.onclick = () => {
      todos.splice(index, 1);
      renderTodos();
      updateCount();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    todos.push(input.value);
    input.value = "";
    renderTodos();
    updateCount();
  }
});
