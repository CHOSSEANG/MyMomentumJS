const API_KEY = "4d3c22c34365693b6a91e1963bcf6fd2"

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You loved it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    //해당 주소로 갈 필요없이 javascript가 url을 부르는 부분
    // URL 서버로부터 응답이 온 후에 동작해야함(이 부분을 위해서 then을 추가함)
    fetch(url).then(response =>response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerHTML =  data.name;
        weather.innerHTML =  data.weather[0].main;
    })
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}

// 아래 함수에 필요한 파라미터는 값을 불러왔을 때의 함수와
// 값을 불러오는 것을 실패했을 때 동작할 함수
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)
