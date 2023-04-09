const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

// 이렇게 자주 사용되는 string의 경우 한번 선언해서 사용하는 것이 좋음
// string만으로 이루어진 변수는 아래와 같이 대문자로 사용
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(tomato){
    tomato.preventDefault(); // 이벤트의 기본 동작을 막음
    const username = loginInput.value;   
    localStorage.setItem(USERNAME_KEY,username); // 브라우저의 local storage에 key,value를 저장
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username)
    
}

// 반복되는 코드를 함수로 만듬
function paintGreetings(username){
    greeting.innerHTML=`Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에 있는 값을 받아와서 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

// localStorage에 값이 없는 경우 form을 보이고
// 값이 있다면 form을 숨기고 Hello 텍스트를 보여주게 하는 부분
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}