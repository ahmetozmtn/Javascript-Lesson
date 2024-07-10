// // ES5

// var helloES5 = function (name) {
//     console.log("Hello " + name);
// };
// helloES5("Andrian");

// var totalES5 = function (num1, num2) {
//     return num1 + num2;
// };

// console.log(totalES5(10, 20));

// // ES6 - Arrow Function

// const helloES6 = (name) => {
//     console.log("Hello " + name);
// };

// helloES6("Alex");

// const totalES6 = (num1, num2) => num1 + num2;

// console.log(totalES6(10, 20));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const products = [
//     {
//         name: "Laptop",
//         price: 10000,
//     },
//     {
//         name: "Mouse",
//         price: 500,
//     },
//     {
//         name: "Keyboard",
//         price: 1000,
//     },
//     {
//         name: "Monitor",
//         price: 2000,
//     },
// ];

// const tekSayilar = numbers.filter((number) => number % 2 === 1);
// const tekSayilar = numbers.map((number) => number % 2 === 1);
// const result = products.map((product) => product.price);
// const result = products
//     .filter((product) => product.price >= 1000)
//     .map((product) => product.name);

// result = products.find((product) => product.price >= 1000);
// result = products.findIndex((product) => product.price >= 1000);

// console.log(result);

// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(...array);

// array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const result = [...array1, ...array2];

// console.log(result);

// rest parameters

// function sum(...numbers) {
//     return numbers.reduce((total, number) => total + number, 0);
// }

// sum(1, 2, 3, 4, 5);

// function showInfo(name, age, ...country) {
//     console.log(name, age, country);
// }

// showInfo("Andrian", 25, "Turkey", "USA", "Germany");

// Array Destructuring

// let userInfo = ["Andrian", "Burn", 25, "Turkey", "Istanbul", "56789"];

// let [firstName, lastName, age, ...address] = userInfo;

// console.log(firstName, lastName, age, address);

// // Object Destructuring

// let product = {
//     brand: "Apple",
//     model: "Iphone 15",
//     price: 60000,
// };

// function showProduct(obj) {
//     let { brand, model, price = 0, isSelling = false } = obj;
//     console.log(brand, model, price, isSelling);
// }

// showProduct(product);
