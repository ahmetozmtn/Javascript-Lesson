// doc: https://www.w3schools.com/jsref/jsref_obj_array.asp

let students = ["Mehmet", "Ada", "Ömer"];

result = students.length;

// array to string
result = students.toString();
result = students.join(" "); // stringleri boşluk ile ayırır. (separator değişebilir, örn; "-, /, _ vb. ")

// eleman silme

// result = students.pop(); // son elemanı siler ve silinen elemanı return eder.
// result = students.shift(); // ilk elemanı siler.

// eleman ekleme

// result = students.push("Ahmet"); // array'in sonuna eleman ekler
// result = students.unshift("Fatih"); // array'in başına eleman ekler

let brands_1 = ["mazda", "toyota"];
let brands_2 = ["opel", "audi"];
let brands_3 = ["togg"];

result = brands_1.concat(brands_2, brands_3); // arrayleri birleştir.

result = brands_1.splice(0, 0, "bmw"); // silme işlemi yapmaz, array'in başına eleman ekler.
result = brands_1.splice(0, 1, "bmw"); // 0.indexten başlar ve 1.index'e kadar ki tüm elemanları siler ve array'in başına eleman ekler.
result = brands_1.splice(0, 1); // sadece silme işlemi yapar.

console.log(result);
console.log(students);
