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

// let number = "370";
// let result = 0;
// for (let i = 0; i < number.length; i++) {
//     let numberIndex = number.charAt(i);
//     let cube = numberIndex * numberIndex * numberIndex;
//     result += cube;
// }
// if (result == number) {
//     console.log(`${number} sayısı bir armstrong sayıdır`);
// } else {
//     console.log(`${number} sayısı bir armstrong sayı değildir`);
// }

// let words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// function findLetter(letter) {
//     let counter = 0;
//     for (let i = 0; i < words.length; i++) {
//         if (words.charAt(i).toLowerCase() === letter.toLowerCase()) {
//             counter += 1;
//         }
//     }
//     if (counter > 0) {
//         return `"${letter}" harfi cümle de ${counter} kere geçmektedir.`;
//     } else {
//         return `"${letter}" harfi cümle de hiç geçmemektedir.`;
//     }
// }

// let result = findLetter("w");
// console.log(result);

//Mükemmel sayı bulma //

// function isPerfectNumber(number) {
//     let total = 0;
//     for (let i = 2; i <= number / 2; i++) {
//         if (number % i == 0) {
//             total += i;
//         }
//     }
//     total += 1 + number;

//     if (total == number * 2) {
//         console.log(` ${number} sayısı bir mükemmel sayıdır.`);
//     } else {
//         console.log(` ${number} sayısı bir mükemmel sayı değildir.`);
//     }
// }

// isPerfectNumber(30);

// Decimal to Binary Conversion //

function convertDecimalToBinary(number) {
    let binary = "";
    while (true) {
        binary += (number % 2).toString();
        number = Math.floor(number / 2);
        if (number == 1) {
            binary += number.toString();
            // döngüden çıkıyoruz
            break;
        }
    }
    let result = binary.split("").reverse().join("");
    console.log(`Sonuç: ${result}`);
    return result;
}

convertDecimalToBinary(150);

// Binary to Decimal Conversion //

let binary = "1011";
function convertBinaryToDecimal(binary) {
    let counter = 0;
    let total = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        total += Number(binary.charAt(i)) * Math.pow(2, counter);
        counter++;
    }
    console.log(`Sonuç: ${total}`);
}

convertBinaryToDecimal(binary);

function convertDecimalToBinary1(number) {
    return number.toString(2);
}

console.log(convertDecimalToBinary1(150));
