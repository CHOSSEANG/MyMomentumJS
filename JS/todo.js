const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";



function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; // li를 구분하기 위해 id를 대입해줌
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

function deleteTodo(event){
    // 이걸로 button의 부모 element를 확인할 수 있음
    const li = event.target.parentNode;
    // 그리고 그냥 해당 element를 remove함
    li.remove();
}

// localStorage엔 string만 저장됨
// 배열을 문자열형태처럼 풀어서 저장함
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}



toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos!=null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(element => {
        paintTodo(element)
    });
} 