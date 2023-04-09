const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
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
    paintTodo(newTodo);
}

function deleteTodo(event){
    // 이걸로 button의 부모 element를 확인할 수 있음
    const li = event.target.parentNode;
    // 그리고 그냥 해당 element를 remove함
    li.remove();
}

toDoForm.addEventListener("submit",handleToDoSubmit)