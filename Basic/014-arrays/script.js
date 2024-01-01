// let product1 = "Iphone 13";
// let product2 = "Iphone 14";
// let product3 = "Iphone 15";

let products = ["Iphone 13", "Iphone 14", "Iphone 15"];
let prices = [30000, 40000, 50000];
let colors = ["Gold", "Black", "White"];

let product1 = ["Iphone 13", 30000, "Gold"];

let product2 = [];
product2[0] = "Iphone 14";
product2[1] = 40000;
product2[2] = "Black";

let product3 = ["Iphone 15", 50000, ["White", "Black", "Blue"]];

console.log(product3[2]);
console.log(product3[2][0]);
console.log(product3[2][1]);
console.log(product3[2][2]);
console.log(typeof product3);

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);

console.log(`${products[0]} - ${prices[0]} - ${colors[0]}`);
console.log(`${products[1]} - ${prices[1]} - ${colors[1]}`);
console.log(`${products[2]} - ${prices[2]} - ${colors[2]}`);

let courseName = "Komple Web Geliştirme Eğitimi";
console.log(courseName[7]);
console.log(courseName.split(" ")[1]);
