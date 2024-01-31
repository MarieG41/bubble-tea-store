//timer
const counter = document.querySelector('.counter');
const timerSet = 60;
let time = timerSet * 60;

setInterval(() => {
    let minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    counter.innerText = `${minutes}:${seconds}`;
    time = time <= 0 ? 0 : time -1;
}, 1000);


let darkBtn = document.querySelector('.switch input');
let darkFlash = document.querySelector('.flash-sale');


darkBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    darkFlash.classList.toggle('purple');
    counter.classList.toggle('purple');
})

let brownSugar = document.querySelector('.choose-brown');
let matcha = document.querySelector('.choose-matcha');
let strawberry = document.querySelector('.choose-strawberry');
let coffee = document.querySelector('.choose-coffee');
let chocolate = document.querySelector('.choose-chocolate');
let taro = document.querySelector('.choose-taro');
let blackTea = document.querySelector('.choose-black-tea');
let greenTea = document.querySelector('.choose-green-tea');
let mintTea = document.querySelector('.choose-mint-tea');
let jasminTea = document.querySelector('.choose-jasmin-tea');
let rooibosTea = document.querySelector('.choose-rooibos-tea');

let linkBrownSugar = document.querySelector('.milk-sugar');
let linkMatcha = document.querySelector('.milk-matcha');
let linkStrawberry = document.querySelector('.milk-strawberry');
let linkCoffee = document.querySelector('.milk-coffee');
let linkChocolate = document.querySelector('.milk-chocolate');
let linkTaro = document.querySelector('.milk-taro');
let linkBlackTea = document.querySelector('.black-tea');
let linkGreenTea = document.querySelector('.green-tea');
let linkMintTea = document.querySelector('.mint-tea');
let linkJasminTea = document.querySelector('.jasmin-tea');
let linkRooibosTea = document.querySelector('.rooibos-tea');

linkBrownSugar.addEventListener('click', function () {
    brownSugar.classList.toggle('reveal');
})

linkMatcha.addEventListener('click', function () {
    matcha.classList.toggle('reveal');
})

linkStrawberry.addEventListener('click', function () {
    strawberry.classList.toggle('reveal');
})

linkCoffee.addEventListener('click', function () {
    coffee.classList.toggle('reveal');
})

linkChocolate.addEventListener('click', function () {
    chocolate.classList.toggle('reveal');
})

linkTaro.addEventListener('click', function () {
    taro.classList.toggle('reveal');
})

linkBlackTea.addEventListener('click', function () {
    blackTea.classList.toggle('reveal');
})

linkGreenTea.addEventListener('click', function () {
    greenTea.classList.toggle('reveal');
})

linkMintTea.addEventListener('click', function () {
    mintTea.classList.toggle('reveal');
})

linkJasminTea.addEventListener('click', function () {
    jasminTea.classList.toggle('reveal');
})

linkRooibosTea.addEventListener('click', function () {
    rooibosTea.classList.toggle('reveal');
})


let small = document.getElementById('s-size');
let large = document.getElementById('l-size');
let prixBase = document.getElementById('total');
let medium = document.getElementById('m-size');

small.addEventListener('click', updatePrixSmall);

function updatePrixSmall(){
    prixBase.textContent = '3.50 €'
}

medium.addEventListener('click', updatePrixMed);

function updatePrixMed() {
    prixBase.textContent = '4.50 €';
}

large.addEventListener('click', updatePrixLarge);

function updatePrixLarge(){
    prixBase.textContent = '5.50 €';
}
