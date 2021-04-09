//TODO - randomize randomText function
//TODO - add animations to modal (fade in/ fade out)
var days = document.querySelector('.days');
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var randomText = document.querySelector('.countdown__random-text');
var countdown = document.querySelector('.countdown');
var coundownWrapper = document.querySelector('.countdown__wrapper');
var countdownModal = document.querySelector('.countdown__modal');
var endDate = new Date('April 14, 2021 21:00:00').getTime();
var textArray = [
    'Schnapp dir Stift und Zettel',
    'Zieh dir etwas bequemes an',
    'Es wird spannend',
];
setInterval(function () {
    setCountdown();
}, 1000);
setText();
// Countdown function
function setCountdown() {
    var now = new Date().getTime();
    var diff = endDate - now;
    if (Math.floor(diff / (1000 * 60 * 60 * 24)) < 10) {
        days.innerHTML = '0' + Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
    }
    else {
        days.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
    }
    if ((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) < 10) {
        hours.innerHTML =
            '0' +
                Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    }
    else {
        hours.innerHTML = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    }
    if ((diff % (1000 * 60 * 60)) / (1000 * 60) < 10) {
        minutes.innerHTML =
            '0' + Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString();
    }
    else {
        minutes.innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString();
    }
    if (Math.floor((diff % (1000 * 60)) / 1000) < 10) {
        seconds.innerHTML = '0' + Math.floor((diff % (1000 * 60)) / 1000);
    }
    else {
        seconds.innerHTML = Math.floor((diff % (1000 * 60)) / 1000).toString();
    }
    if (parseInt(days.innerHTML) <= 0 &&
        parseInt(hours.innerHTML) <= 0 &&
        parseInt(minutes.innerHTML) <= 0 &&
        parseInt(seconds.innerHTML) <= 0) {
        coundownWrapper.classList.add('hidden');
        randomText.classList.add('hidden');
        countdownModal.classList.remove('hidden');
        countdownModal.classList.add('visible');
        countdown.style.backgroundColor = 'black';
    }
}
function setText() {
    // let displayIndex: number = 0;
    // let delay: number = 10000;
    // setInterval(() => {
    // 	if (randomText) {
    // 		randomText.innerHTML = textArray[displayIndex];
    // 	}
    // 	// Move to the next item in dialog
    // 	displayIndex++;
    // 	// If display index goes out of index range, start again
    // 	if (displayIndex >= textArray.length) {
    // 		displayIndex = 0;
    // 	}
    // }, delay);
    var count = 0;
    setInterval(function () {
        count++;
        $('.countdown__random-text').fadeOut(2000, function () {
            $(this)
                .text(textArray[count % textArray.length])
                .fadeIn(2000);
        });
    }, 10000);
}
