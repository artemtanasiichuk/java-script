const celsius = 19; 
const fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit)


let daysInMonth = 30; 
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("chasov v chasy", hoursInMonth);
console.log("minyt v mesace:", minutesInMonth);


let health = 100;
let energy = 80;
health -= 20; 
energy -= 15; 
console.log("уroven zcorovya:", health);
console.log("уroven energii:", energy);

let totalPrice = 500; 
let discount = 0.1; 
let discountedPrice = totalPrice * (1 - discount);
console.log("cena so skydkoy:", discountedPrice);


const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log( roundedDown);


const floatString = "45.67" 
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat);


const intString = "123"; 
let parsedInt = parseInt(intString);
console.log(parsedInt);


let number = 81;
let sqrtNumber = Math.sqrt(number);  
console.log(sqrtNumber);


const integer = 42;
const stringNumber = "256"; 
let convertedInt = parseInt(stringNumber);
console.log(convertedInt);
let convertedString = integer.toString();
console.log(convertedString);