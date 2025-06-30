
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("temperatura ferengaitu:", fahrenheit);


let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("godin u misaci:", hoursInMonth);
console.log("minytu v misaciі:", minutesInMonth);


let health = 100;
let energy = 80;
health -= 20;
energy -= 15;
console.log("zdorovya pisla vtratu", health);
console.log("energiya pisla vtratu:", energy);


let totalPrice = 200;
let discount = 0.10;
let discountedPrice = totalPrice * (1 - discount);
console.log("cina zi znizkoyu:", discountedPrice);


const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log("okruglenya vniz chislo:", roundedDown);


const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log("peretvorenuy float:", parsedFloat);

const intString = "123";
let parsedInt = parseInt(intString);
console.log("peretvorenuy int:", parsedInt);

let number = 64;
let sqrtNumber = Math.sqrt(number);
console.log("lvadratniy korin:", sqrtNumber);

const integer = 42;
const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
let convertedString = integer.toString();
console.log("radok + chislo:", convertedInt);
console.log("chislo + radok:", convertedString);
