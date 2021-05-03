const title = document.querySelector("#title");

function clickMyWork () {
	title.style.color = 'red';
}

title.addEventListener('click', clickMyWork );