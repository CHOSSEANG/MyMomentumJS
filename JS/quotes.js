const quotes = [
    {
        quote:"자신을 극복하는 힘을 가진 사람이 가장 강하다",
        author:"세네카"
    },{
        quote:"인간은 잘해야 겨우 60% 정도만 올바른 판단을 할 수 있다. 이 판단 뒤에 필요한 것은 용기와 실행력이다",
        author:"마쓰시타 고노스케"
    },{
        quote:"세상에서 가장 파괴적인 단어는 '나중'이고, 인생에서 가장 생산적인 단어는 '지금'이다.",
        author:"이민규"
    },{
        quote:"적게 이루고 싶은 사람은 적게 희생하고, 많이 이루고 싶은 사람은 많이 희생해야 한다",
        author:"제임스 앨런"
    },{
        quote:"시작할 용기가 없는 자는 이미 끝난 것과 마찬가지다.",
        author:"None"
    },{
        quote:"두려움에 맞서는 것, 그것이 용기다. 아무것도 두려워하지 않는 것은 어리석음이다",
        author:"토드 벨메르"
    },{
        quote:"성공이란 넘어지는 횟수보다 한번 더 일어서는 것이다",
        author:"올리버 골드스미스"
    },{
        quote:"최선을 다하고, 그 나머지는 잊어라",
        author:"윌터 앨스턴"
    },{
        quote:"나는 이룰 때까지 노력할 것이다",
        author:"브라이언 트레이시"
    },{
        quote:"단 1분도 더 버틸 수 없다고 느껴질 때, 그떄야말로 포기해서는 안된다. 바로 그런 시점과 위치에서 상황은 바뀌기 시작한다.",
        author:"해리엇 비처 스토우"
    },{
        quote:"다른 사람이 무엇을 하는지 신경쓰지 마라. 더 나은 당신이 되기 위해 노력하고 매일 당신의 기록을 깨뜨려라. 그러면 성공한다.",
        author:"윌리엄 보엣커"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
console.log(todayQuote)

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
