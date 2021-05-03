const title = document.querySelector('#title');
const BASE_COLOUR = "rgb(52, 73, 94)";
const OTHER_COLOUR = "#7f8c8d";

function clickMyWork() {
	const currentColour = title.style.color;
	if (currentColour === BASE_COLOUR) {
		title.style.color = OTHER_COLOUR;
	} else {
		title.style.color = BASE_COLOUR;
	}
}



function init() {
	title.style.color = BASE_COLOUR;
	title.addEventListener('click', clickMyWork)
}

init();


function offlineMyWork() {
	console.log("Потеряно соединение");
}

function onlineMyWork() {
	console.log("Соединение восстановлено");
}

window.addEventListener('offline', offlineMyWork);
window.addEventListener('online', onlineMyWork);


// const title = document.querySelector('#title');
// const BASE_COLOUR = 'rgb(52, 73, 94)';
