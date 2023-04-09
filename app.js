const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME="hidden";

function onLoginSubmit(tomato){
    tomato.preventDefault();
    const username = loginInput.value;   
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    greeting.innerHTML=`Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);