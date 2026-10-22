console.log("Hello, JavaScript! 👋");
console.log("silvercute hehe");
console.log(2026);
console.log("Score:", 99);
console.log(15 + 5);
console.log(5 * 2);
console.log("silver" + " gold");

const name = "Silver";
let baon = 70;
console.log(name);
console.log(baon);
baon = baon - 45; // bought lunch
console.log(baon);

const city = "Quezon City"; // string
const age = 17; // number
const isStudent = true; // boolean
let nickname; // undefined
const middleName = null; // null
console.log(typeof city);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof nickname);
console.log(typeof middleName);

const firstName = "Silver";
const lastName = "Cardinal";
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(`Hi, ${firstName}! Welcome to the team.`);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.includes("Cardinal"));
console.log(" Silver ".trim());
console.log(`Hi, My name is ${firstName} ${lastName}! I am ${age} years old and I live in ${city}.`);

const price = 15;
const qty = 4;
console.log(price * qty);
console.log(100 - price * qty);
console.log(17 / 5);
console.log(17 % 5);
console.log(2 ** 3);
let stock = 10;
stock = stock - 3;
stock += 5; // same as: stock = stock + 5
stock++; // add 1
console.log(stock);
console.log((10 / 3).toFixed(2));
console.log(Math.floor(7.9));
console.log(Math.round(7.5));
console.log("5" + 3);
console.log(Number("5") + 3);
const grade = 85;
console.log(grade >= 75);
console.log(grade === 100);
console.log(grade !== 100);
console.log(5 === "5");
console.log(5 == "5");

const hour = 14;
if (hour < 12) {
console.log("Magandang umaga!");
} else if (hour < 18) {
console.log("Magandang hapon!");
} else {
console.log("Magandang gabi!");
}
const userAge = 17;
const hasId = true;
if (userAge >= 18 && hasId) {
console.log("You can vote.");
} else {
console.log("Not yet. Wait a bit!");
}