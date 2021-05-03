// if (4 > 5 === 5 > 10 || 6 > 0) {
// 	console.log ("YOY RIGHT");
// }
// else {
// 	console.log ("AmericanBoy");
// }

const warningAge = prompt("Привет.А сколько-то годков, то ?");

if (warningAge >= 18 && warningAge <= 20) {
	console.log("А ты уверена-то?:)");
} else if (warningAge >= 21) {
	console.log("Я выезжаю к тебе");
} else {
	console.log("Пошла уроки учить, пиздючка");
}