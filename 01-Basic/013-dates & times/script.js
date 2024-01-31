// doc: https://www.w3schools.com/jsref/jsref_obj_date.asp

let now = new Date(); // şimdiki tarih - saat

// Get Methods

result = now;
result = now.getDate(); // gün
result = now.getDay(); // 0: pazar, 6: cumartesi
result = now.getFullYear(); // yıl
result = now.getHours(); // saat
result = now.getTime();

// Set Methods
// now.setFullYear(2025);
now.setMonth(7); // 0: ocak
now.setDate(10);

result = now;

let dogumTarihi = new Date(1990, 5, 15);

result = now.getFullYear() - dogumTarihi.getFullYear();

let milisecond = now - dogumTarihi;
let second = milisecond / 1000;
let minute = second / 60;
let hour = minute / 60;
let daily = hour / 24;

console.log(typeof result);
console.log(result);
