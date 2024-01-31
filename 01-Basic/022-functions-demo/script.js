function wordReturn(word) {
    console.log(word);
}
wordReturn("Hello, world!");

function alanCevreCalc(kısa, uzun) {
    let alan = kısa * uzun;
    let cevre = (kısa + uzun) * 2;
    return `Alan: ${alan}  - Çevre: ${cevre}`;
}
console.log(alanCevreCalc(10, 20));

function yazıTura() {
    let result = parseInt(Math.random() * 10);
    if (result < 5) {
        console.log("Yazı geldi");
    } else {
        console.log("Tura geldi");
    }
}

yazıTura();

function tamBolen(sayi) {
    let sayilar = [];
    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            sayilar.push(i);
        }
    }
    return sayilar;
}
console.log(tamBolen(10));
console.log(tamBolen(20));
console.log(tamBolen(35));

function total() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(total(2, 5));
console.log(total(2, 5, 7, 9, 15));
