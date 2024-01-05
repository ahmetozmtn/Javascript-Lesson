let vize1 = prompt("1. Vize Notunuzu Girin: ");
let vize2 = prompt("1. Vize Notunuzu Girin: ");
let final = prompt("Final Notunuzu Girin: ");

let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;

if (ortalama > 60 && final > 60) {
    alert("Geçtiniz!");
} else {
    alert("Kaldınız");
}
