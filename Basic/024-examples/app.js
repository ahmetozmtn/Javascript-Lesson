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

let number = Number(79);
let result = true;
for (let i = 2; i <= Math.floor(number / 2); i++) {
    if (number % i == 0) {
        result = false;
        break;
    }
}
if (result) {
    console.log(`${number} asal bir sayıdır`);
} else {
    console.log(`${number} asal bir sayı değildir!`);
}
