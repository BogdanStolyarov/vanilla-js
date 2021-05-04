const clockContainer = document.querySelector('.js-clock'),
	// ищем класс по всему документу (наша страница > класс)
	clockTitle = clockContainer.querySelector('h1');
// ищем в нашем классе h1 (.js-clock > h1)

function getTime() {
	// Объявляем нашу функцитю
	const date = new Date();
	//  Какой-то оч засекреченный объект
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	clockTitle.innerHTML = `${hours  <10 ? `0${hours}`: hours}:${minutes <10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds }`;
}


function init() {
	getTime();
	setInterval(getTime, 1000);
}

init();