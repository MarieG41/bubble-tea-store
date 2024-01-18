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
