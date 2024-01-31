let result;

result = 10;
result = "10";
result = Number("10");
result = parseInt("10.4");
result = parseFloat("10.4");
result = parseInt("10a");
result = parseInt("a10");

result = isNaN("10");

let sayi = 20.1553745745;

result = sayi.toPrecision(5); // sayi'nin ilk 5 basamağını getirir
result = sayi.toFixed(5); // sayi'nin ondalıklı kısımından 5 basamağını getirir

result = Math.round(2.4); // em yakın sayıya yuvarlar
result = Math.round(2.6);
result = Math.ceil(2.6); // yukarı yuvarlar
result = Math.floor(2.6); // aşağı yuvarlar
result = Math.sqrt(25);
result = Math.pow(2, 3);
result = Math.abs(-10);
result = Math.min(4, 2, 1, 3, 7, 8);
result = Math.max(4, 2, 1, 3, 7, 8);
result = Math.floor(Math.random() * 10) + 1;

console.log(typeof result);
console.log(result);
