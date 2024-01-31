let numbers = [1, 5, 7, 15, 3, 25, 13, 35, 10, 12, 6, 8];

// 1- numbers array'indeki her elemanın karesini yazdırın.

for (let i in numbers) {
    console.log(numbers[i] * numbers[i]);
}

// for (let number of numbers) {
//     console.log(number * number);
// }

// 2 numbers array'indeki hangi sayılar 5'in katırdır?
for (let number of numbers) {
    if (number % 5 == 0) {
        console.log(`${number} 5'in katıdır`);
    }
}
// 3- numbers array'indeki çift sayıların toplamını bulunuz?

let toplam = 0;

for (let number of numbers) {
    if (number % 2 == 0) {
        toplam += number;
    }
}
console.log(toplam);

let products = ["Iphone 13", "Iphone 14", "Iphone 15", "Samsung S23"];

// 4- products array'in deki tüm  ürünleri büyük harf ile yazdırın

let productArray = [];

for (let product of products) {
    // productArray.push(product.toUpperCase());
    console.log(product.toUpperCase());
}

for (let product of products) {
    productArray.push(product.toUpperCase());
}
console.log(productArray);
// 5 products array'inde  samsung geçen kaç ürün vardır?

let piece = 0;

for (let product of products) {
    if (product.includes("Samsung")) {
        piece++;
    }
}
console.log(piece);

let students = [
    { name: "Mehmet", surname: "Sönmez", notes: [60, 70, 70] },
    { name: "Reyhan", surname: "Gül", notes: [80, 70, 90] },
    { name: "Murat", surname: "Kaplan", notes: [75, 70, 50] },
];

// öğrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırın

for (let student of students) {
    let total_note = 0;
    let avg_note = 0;
    let piece = 0;
    for (let note of student.notes) {
        total_note += note;
        piece++;
    }
    avg_note = total_note / piece;
    console.log(
        `${student.name} ${student.surname} isimli öğrencinin not ortalaması ${avg_note}`
    );

    if (avg_note >= 50) {
        console.log("Başarılı.");
    } else {
        console.log("Başarısız.");
    }
}

// tüm öğrencilerin not ortalaması kaçtır?

let total_notes1 = 0;
let piece1 = 0;
for (let student of students) {
    for (let note of student.notes) {
        console.log(note);
        total_notes1 += note;
        piece1++;
    }
}

console.log(total_notes1 / piece1);
