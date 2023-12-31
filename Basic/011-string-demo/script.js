let url = "https://sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterden oluşmaktadır?

result = url.length;

// 2- kursAdi kaç kelimeden oluşmatadır?

result = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?

result = url.startsWith("https");

if (result) {
    console.log("https ile Başlıyor");
} else {
    console.log("https ile Başlamıyor");
}

// 4- kursAdi  içeriğinde Eğitimi kelimesi var mı?

if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log("var");
} else {
    console.log("yok");
}

// 5- url ve kurAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturun?
// https://sadikturan.com/komple-web-gelistirme-kursu

result = kursAdi.toLowerCase().replaceAll(" ", "-").replaceAll("ş", "s");
result2 = `${url}${result}`;
console.log(result2);
