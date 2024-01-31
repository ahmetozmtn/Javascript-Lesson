// // 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
let sayi1 = 49;

if (sayi1 > 10 && sayi1 < 50) {
    console.log(`${sayi1} sayısı 10-50 arasında`);
} else {
    console.log(`${sayi1} sayısı 10-50 arasında değil`);
}

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
let sayi2 = 11;

if (sayi2 > 0 && sayi2 % 2 == 1) {
    console.log(`${sayi2} sayısı bir pozitif tek sayı`);
} else {
    console.log(`${sayi2} sayısı bir pozitif tek sayı değil`);
}

// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if 'i araştırınız.)

let x = 10,
    y = 15,
    z = 20;

if (x > y && x > z) {
    console.log("x en büyük");
} else if (y > x && y > z) {
    console.log("y en büyük");
} else if (z > x && z > y) {
    console.log("z en büyük");
}

// 4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;

let vize1 = 10;
let vize2 = 10;
let final = 70;

let ort = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;
console.log(`Ortalama: ${ort}`);

// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.

if (ort >= 50) {
    console.log("Geçtiniz.");
} else {
    console.log("Kaldınız.");
}

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

if (ort >= 50 && final >= 50) {
    console.log("Geçtiniz");
} else {
    console.log("Kaldınız");
}

// c- Finalden 70 aldığında ort. 50'nin altında olsa bile dersten geçilsin.

if (ort >= 50 || final >= 70) {
    console.log("Geçtiniz");
} else {
    console.log("Kaldınız");
}
