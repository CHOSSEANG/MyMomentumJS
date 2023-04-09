const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock()
setInterval(getClock,1000); // 함수를 interval 하기 위한 함수