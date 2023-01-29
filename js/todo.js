const toDoForm = document.querySelector("#jsTodoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".list__todo");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  let checkID = toDoList.children.length + 1;
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.className = "todo__item";
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.id = checkID;
  checkBox.className = "todo__check";
  const label = document.createElement("label");
  label.setAttribute("for", checkID);
  label.className = "todo__text";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  label.appendChild(span);
  const button = document.createElement("button");
  button.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  button.className = "btn__delete btn";
  button.addEventListener("click", deleteToDo);
  li.appendChild(checkBox);
  li.appendChild(label);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
