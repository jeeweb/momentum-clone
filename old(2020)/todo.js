const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    // console.log(event.target); // 현재 선택된 버튼
    // console.dir(event.target);
    //console.log(event.target.parentNode);   // 선택한 버튼의 부모태그를 알려줌
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // JSON.stringify: javascript 객체를 string으로 바꿔줌
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // string으로 된 json을 객체화 시켜줌
        // console.log(parsedToDos);
        parsedToDos.forEach(function(toDo) {
            // console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }
}

function init () {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit)
}

init();