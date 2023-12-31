// doc : https://www.w3schools.com/jsref/jsref_obj_string.asp

let str = "Komple Uygulamalı Web Geliştirme Eğitimi";

let result;

result = str.toLowerCase(); // string deki tüm harfleri küçültür.
result = str.toUpperCase(); // string deki tüm harfleri büyütür.
result = str.length; // string'in uzunluğunu verir.
result = str[1]; // string'in 1.index'in deki karakteri verir.

result = str.slice(0, 6); // string'in 0-6 index'indeki karakterleri verir.
result = str.slice(10); // string'in 10.index'in den başlar sonuna kadar ki tüm karakterleri verir.
result = str.slice(-10); // string'in -10.index'in den başlar sonuna kadar ki tüm karakterleri verir.
result = str.slice(-10, -5); // string'in -10 ve -5 indexleri arasındaki tüm karakterleri verir.

result = str.substring(0, 6); // silce ile aynı işlemi yapar.
result = str.substring(10);

result = str.replace("Eğitimi", "Kursu"); // string içindeki bir karakteri değiştirmek için kullanılır.
result = str.trim(); // string deki başta ve sondaki boşlukları temizler
result = str.trimEnd();
result = str.trimStart();

result = str.indexOf("Komple"); // string de verilen kelimeyi arar.
result = str.split(" "); // string'i boşluklardan ayırıp bir dizi haline getirir.
result = str.split(" ")[0];

console.log(result);
