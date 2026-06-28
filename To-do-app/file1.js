// // Select elements
const formtodo = document.querySelector(".form-todo");
const forminput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
const priority = document.querySelector("#priority");

// Define order for sorting
const priorityOrder = { High: 1, Medium: 2, Low: 3 };

// Listen for form submit
formtodo.addEventListener("submit", (e) => {
  e.preventDefault();

  const addTodo = forminput.value.trim();
  if (addTodo === "") {
    alert("Please add some task");
    return;
  }

  // Create list item
  const newLi = document.createElement("li");
  newLi.dataset.priority = priority.value;

  // Color by priority
  if (priority.value === "High") newLi.style.backgroundColor = "purple";
  else if (priority.value === "Medium") newLi.style.backgroundColor = "orange";
  else newLi.style.backgroundColor = "green";

  // Add content inside li
  newLi.innerHTML = `
    <span class="text">${addTodo}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
  `;

  // Add the new li to the list
  todoList.appendChild(newLi);

  // Clear input
  forminput.value = "";

  // Sort list after adding
  sortTasks();
});

// Click event for remove and done
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.closest("li").remove();
  }

  if (e.target.classList.contains("done")) {
    const textSpan = e.target.closest("li").querySelector(".text");
    textSpan.style.textDecoration = "line-through";
  }
});

// Sorting function
function sortTasks() {
  const items = Array.from(todoList.children);
  items
    .sort(
      (a, b) =>
        priorityOrder[a.dataset.priority] - priorityOrder[b.dataset.priority]
    )
    .forEach((item) => todoList.appendChild(item));
}
