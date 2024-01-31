// for (let i = 0; i <= 10; i++) {
//     console.log(i); // i değişkeni 10 olana kadar döngü devam eder, i değişkeni 10 defa ekrana yazdırır
// }

// // other examples
// for (let i = 0; i <= 10; i++) {
//     console.log("Hello World!");
// }

// let total = 0;
// for (let i = 0; i <= 10; i++) {
//     total += i; // 1 den 10'a kadar tüm sayıları toplar.
// }
// console.log(total);

let numbers = [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 2, 6, 7];

let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }

// for (let i in numbers) {
//     total += numbers[i];
// }

for (let sayi of numbers) {
    total += sayi;
}

console.log(`Total: ${total}`);

let user = {
    name: "John Smith",
    username: "JSmith",
    password: "John@.$m1th",
    email: "johnsmith@gmail.com",
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
