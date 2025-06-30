
let age = 15;
console.log("Ваш вік:", age);


let name = "artem";
const artem= "artem"


console.log("Ваше ім'я:", name);


let isStudent = true;


console.log("Чи ви студент:", isStudent);


let myString = "Не помиляється той, хто нічого не робить.";
console.log("Цитата:", myString);

let myNumber = 4;
myNumber += 10;


console.log("myNumber після додавання 10:", myNumber);


let myNull = null;


console.log("Значення myNull:", myNull);


let userName = prompt("Введіть своє ім’я:");
alert("Ваше ім’я: " + userName);
console.log("Тип змінної userName:", typeof userName);


let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");


console.log("Результат підтвердження:", userAnswer);
if (userAnswer) {
    console.log("Користувач погодився покинути сторінку.");
} else {
    console.log("Користувач відмінив дію.");
}


alert("Увага! Дія може бути небезпечною!");
let continueAction = confirm("Ви впевнені, що хочете продовжити?");
if (continueAction) {
    console.log("Користувач підтвердив дію.");
} else {
    console.log("Користувач скасував дію.");
}
