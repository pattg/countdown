var days = document.querySelector('.days');
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var randomText = document.querySelector('.countdown__random-text');
var endDate = new Date('April 14, 2021 21:00:00').getTime();
var textArray = [
    'random stuff',
    'Wenn du wüsstest',
    '172865',
    'bli bla blub',
];
setInterval(function () {
    setCountdown();
}, 1000);
setInterval(function () {
    setRandomText();
}, 5000);
// Countdown function
function setCountdown() {
    var now = new Date().getTime();
    var diff = endDate - now;
    days.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
    hours.innerHTML = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    minutes.innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString();
    if (Math.floor((diff % (1000 * 60)) / 1000) < 10) {
        seconds.innerHTML = '0' + Math.floor((diff % (1000 * 60)) / 1000);
    }
    else {
        seconds.innerHTML = Math.floor((diff % (1000 * 60)) / 1000).toString();
    }
}
//random Text
function setRandomText() {
    var randomNumber = Math.floor(Math.random() * textArray.length);
    randomText.innerHTML = textArray[randomNumber];
}
