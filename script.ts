let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let randomText = document.querySelector('.countdown__random-text');
let coundownWrapper = document.querySelector('.countdown__wrapper');
let countdownModal= document.querySelector('.countdown__modal');

console.log(countdownModal);

let endDate = new Date('April 7, 2021 21:56:00').getTime();
const textArray = [
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
function setCountdown(): void {
	let now = new Date().getTime();
	let diff = endDate - now;

	days.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
	hours.innerHTML = Math.floor(
		(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	).toString();
	minutes.innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString();

	if (Math.floor((diff % (1000 * 60)) / 1000) < 10) {
		seconds.innerHTML = '0' + Math.floor((diff % (1000 * 60)) / 1000);
	} else {
		seconds.innerHTML = Math.floor((diff % (1000 * 60)) / 1000).toString();
	}

	if((parseInt(days.innerHTML)) && (parseInt(hours.innerHTML) && (parseInt(minutes.innerHTML) && (parseInt(seconds.innerHTML)) <= 0 ))){
		coundownWrapper.classList.add('hidden');
		randomText.classList.add('hidden');
		countdownModal.classList.remove('hidden');
		countdownModal.classList.add('visible');
	}
}

//random Text
function setRandomText() {
	let randomNumber = Math.floor(Math.random() * textArray.length);
	randomText.innerHTML = textArray[randomNumber];
}
