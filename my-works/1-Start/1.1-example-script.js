let ogr1_ad = "Emre";
let ogr1_soyad ="Arıca";
let ogr1_dogumTarihi ="2013"

let ogr1_mat1 = 70;
let ogr1_mat2 = 70;
let ogr1_mat3 = 80;

let ogr1_ortalama = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3 ;

console.log(parseFloat(ogr1_ortalama)); // ParseFloat virgülleri de gösterir.
console.log(ogr1_ortalama >= 50);

let ogr2_ad = "Halil";
let ogr2_soyad ="Arıca";
let ogr2_dogumTarihi ="1996"

let ogr2_mat1 = 40;
let ogr2_mat2 = 40;
let ogr2_mat3 = 50;

let ogr2_ortalama = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;

console.log(parseFloat(ogr2_ortalama));
console.log(ogr2_ortalama >=50);

let suankiYil = new Date().getFullYear();

let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi);   // ParseInt tam sayi belirtir.
let ogr2_yas = suankiYil - parseInt(ogr2_dogumTarihi);

console.log(ogr1_yas);
console.log(ogr2_yas);

console.log(`Birinci ogrenci ${ogr1_ad} ${ogr1_soyad} ${suankiYil - ogr1_dogumTarihi} yasindadir. Sınav ortalaması ${ogr1_ortalama} durumu ${ogr1_ortalama >=50} `);
console.log(`İkinci ogrenci ${ogr2_ad} ${ogr2_soyad} ${suankiYil - ogr2_dogumTarihi} yasindadir. Sınav ortalaması ${ogr2_ortalama} durumu ${ogr2_ortalama >=50} `);



