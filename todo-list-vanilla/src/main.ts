import "bootstrap/dist/css/bootstrap.min.css";

const newTodoForm: HTMLFormElement = document.querySelector("#newTodoForm")!;
const todoList: HTMLUListElement = document.querySelector("#todoList")!;

newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodo: HTMLInputElement = document.querySelector("#newTodo")!;

  if (!newTodo.value.trim().length) return;

  createTodo(newTodo.value);

  newTodo.value = "";
});

function createTodo(todo: string) {
  const item = document.createElement("li");
  const itemLabel = document.createElement("label");
  const itemLabelCheckbox = document.createElement("input");
  const itemDeleteButton = document.createElement("button");

  item.classList.add("list-group-item", "d-flex", "align-items-center");
  item.appendChild(itemLabel);
  item.appendChild(itemDeleteButton);

  itemLabel.classList.add("flex-fill");
  itemLabel.appendChild(itemLabelCheckbox);
  itemLabel.append(todo);

  itemLabelCheckbox.classList.add("form-check-input", "me-1");
  itemLabelCheckbox.type = "checkbox";

  itemDeleteButton.classList.add("btn", "btn-danger");
  itemDeleteButton.textContent = "Delete";
  itemDeleteButton.addEventListener("click", () => {
    item.remove();
  });

  todoList.appendChild(item);
}
