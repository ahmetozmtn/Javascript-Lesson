var urunAdi = "Iphone 15"; // string
let urunFiyat = 60000; //number

console.log(typeof urunAdi); // typeof methodu değişkenin türünü gösterir
console.log(typeof urunFiyat);

let sayi1 = "10"; // string
let sayi2 = "20"; // string

console.log(Number(sayi1) + Number(sayi2)); // string den number türüne, tür değişimi

let sayi3 = 10; // number
let sayi4 = 20; // number

console.log(sayi3.toString() + sayi4.toString()); // number dan string'e, tür değişimi

let isim = "Ahmet";
let soyad = "Özmetin";

console.log(isim + " " + soyad);

let sinavNotu = 40;
let basarilimi = sinavNotu >= 50;

console.log(basarilimi);
console.log(typeof basarilimi); // boolean

let x;
console.log(x);
console.log(typeof x); //undefined
