// const title = document.querySelector('#title');
// const DELETE_CLASS = 'delete';

// function clickMyWork() {
// 	const hasClicked = title.classList.contains(DELETE_CLASS);
// 	if (hasClicked) {
// 		title.classList.remove(DELETE_CLASS);
// 	} else {
// 		title.classList.add(DELETE_CLASS);
// 	}
// }



// function init() {
// 	title.addEventListener('click', clickMyWork);
// }
// init();


const title = document.querySelector('#title');
const WORKING_CLASS = 'working-bitch';

function clickMyWork() {
	title.classList.toggle(WORKING_CLASS);
}

function init() {
	title.addEventListener('click', clickMyWork);
}
init();