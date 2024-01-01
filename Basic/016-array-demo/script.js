// 1- "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturun.

fruits = ["Elma", "Armut", "Muz", "Çilek"];

let result;
// 2- Array kaç elemanlıdır?

result = fruits.length;

// 3- Arrayin ilk ve son elemanı nedir
result = fruits[0]; // Elma
result = fruits.slice(-1); // Çilek
result = fruits[fruits.length - 1]; // Çilek

// 4-  "Elma array'in bir elemanı mı?
result = fruits.includes("Elma");

// 5- "Kiraz" meyvesini array'in sonuna ekleyin.
result = fruits.push("Kiraz");

// 6- Array'in son 2 elemanını silin.
result = fruits.splice(fruits.length - 2, 2);

// 7- // 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012   (80,80,90)
        Öğrenci 3: Ahmet Turan 2009 (60,60,70)
    */

student_1 = ["Yiğit", "Bilgi", 2010, [70, 60, 80]];
student_2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
student_3 = ["Ahmet", "Turan", 2009, [60, 60, 70]];

now = new Date();

let studentsArray = [student_1, student_2, student_3];

let yigitYas = now.getFullYear() - studentsArray[0][2];
let adaYas = now.getFullYear() - studentsArray[1][2];
let ahmetYas = now.getFullYear() - studentsArray[2][2];

let yigitNot =
    (studentsArray[0][3][0] + studentsArray[0][3][1] + studentsArray[0][3][2]) /
    3;
let adaNot =
    (studentsArray[1][3][0] + studentsArray[1][3][1] + studentsArray[1][3][2]) /
    3;
let ahmetNot =
    (studentsArray[2][3][0] + studentsArray[2][3][1] + studentsArray[2][3][2]) /
    3;

console.log(yigitYas, adaYas, ahmetYas);
console.log(yigitNot.toFixed(1), adaNot.toFixed(1), ahmetNot.toFixed(1));
console.log(result);
console.log(fruits);
