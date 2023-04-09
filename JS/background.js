const images = ["0.jpg","1.jpg","2.jpg"]

const chosenImage = images[Math.floor(Math.random()*images.length)]

// HTML에 element를 생성하는 부분
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

// appendChild는 body우ㅏ 먄 듀ㅏ에 해당 element를 추가함
// prependChild를 하게 되면 맨 앞에 해당 element를 추가함
document.body.appendChild(bgImage);