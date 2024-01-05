// let vize1 = prompt("1. Vize Notunuzu Girin: ");
// let vize2 = prompt("1. Vize Notunuzu Girin: ");
// let final = prompt("Final Notunuzu Girin: ");

// let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;

// if (ortalama > 60 && final > 60) {
//     alert("Geçtiniz!");
// } else {
//     alert("Kaldınız");
// }

// for (let first = 1; first <= 10; first++) {
//     for (let second = 1; second <= 10; second++) {
//         for (let third = 1; third <= 10; third++)
//             console.log(
//                 `${first}x${second}x${third}=${first * second * third}`
//             );
//     }
//     console.log("-----------------------");
// }

// let number = Number(79);
// let result = true;
// for (let i = 2; i <= Math.floor(number / 2); i++) {
//     if (number % i == 0) {
//         result = false;
//         break;
//     }
// }
// if (result) {
//     console.log(`${number} asal bir sayıdır`);
// } else {
//     console.log(`${number} asal bir sayı değildir!`);
// }

// let number = Number(6);
// let result = 1;
// for (let i = 1; i <= number; i++) {
//     result = result * i;
// }
// console.log(`Sonuç: ${result}`);

let number = "370";
let result = 0;
for (let i = 0; i < number.length; i++) {
    let numberIndex = number.charAt(i);
    let cube = numberIndex * numberIndex * numberIndex;
    result += cube;
}
if (result == number) {
    console.log(`${number} sayısı bir armstrong sayıdır`);
} else {
    console.log(`${number} sayısı bir armstrong sayı değildir`);
}
