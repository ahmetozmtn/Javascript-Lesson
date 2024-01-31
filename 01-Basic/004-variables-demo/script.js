let ogr1_isim = "Ada";
let ogr1_soyad = "Bilgi";
let ogr1_dogumTarihi = 2012;
let ogr1_mat1 = 70;
let ogr1_mat2 = 70;
let ogr1_mat3 = 80;
let ogr1_matOrt = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;
console.log(parseInt(ogr1_matOrt)); // float integer'a çevirir
console.log(ogr1_matOrt >= 50);

let ogr2_isim = "Yiğit";
let ogr2_soyad = "Bilgi";
let ogr2_dogumTarihi = 2010;
let ogr2_mat1 = 40;
let ogr2_mat2 = 40;
let ogr2_mat3 = 50;
let ogr2_matOrt = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;
console.log(parseInt(ogr2_matOrt)); // float integer'a çevirir
console.log(ogr2_matOrt >= 50);

nowYear = new Date().getFullYear(); // PC'nin o anki zamanını alır yıl cinsinden

ogr1_yas = nowYear - parseInt(ogr1_dogumTarihi);
ogr1_yas = nowYear - parseInt(ogr2_dogumTarihi);
console.log(ogr1_yas);
