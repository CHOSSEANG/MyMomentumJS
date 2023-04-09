function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You loved it", lat, lng);
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}

// 아래 함수에 필요한 파라미터는 값을 불러왔을 때의 함수와
// 값을 불러오는 것을 실패했을 때 동작할 함수
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)
