let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let randomText = document.querySelector('.countdown__random-text');

let endDate = new Date('April 14, 2021 21:00:00').getTime();
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
function setCountdown() {
	let now = new Date().getTime();
	let diff = endDate - now;

	days.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24));
	hours.innerHTML = Math.floor(
		(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	minutes.innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

	if (Math.floor((diff % (1000 * 60)) / 1000) < 10) {
		seconds.innerHTML = '0' + Math.floor((diff % (1000 * 60)) / 1000);
	} else {
		seconds.innerHTML = Math.floor((diff % (1000 * 60)) / 1000);
	}
}

//random Text
function setRandomText() {
	let randomNumber = Math.floor(Math.random() * textArray.length);
	randomText.innerHTML = textArray[randomNumber];
}
