let ad = "Mehmet";
let soyad = "Can";
let yas = 45;
let sehir = "Ankara";

let mesaj =
    "Benim adım " +
    ad +
    "ve soyadım " +
    soyad +
    ". " +
    sehir +
    "'de yaşıyorum." +
    "Emekliliğe " +
    (65 - yas) +
    " yılım kaldı.";

//backtick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${
    65 - yas
} yılım kaldı.`;

// ternary operators
let emeklilik =
    65 - yas > 0
        ? "Emekliliğe " + (65 - yas) + " yıl kaldı."
        : "Zaten emeli oldunuz.";

mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`;

console.log(mesaj);
