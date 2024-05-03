// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================


const kola=50;
const cips=30;
const dondurma=20;

console.log(kola+cips+dondurma);

let toplam=kola+cips+dondurma;

console.log(toplam);

//! bir arttır

//  toplam++
//  console.log(toplam);


 toplam++
 toplam=toplam+1

 console.log(toplam);

 //!10 arttır


 toplam+=10 // toplam=toplam+10

 console.log(toplam);


 //? + operatörü string concatination işlemi de yapar

 

 const sayi1="3";
 const sayi2=8;

 console.log(sayi1 + sayi2);
 console.log(sayi1 - sayi2);

 //!!BACKTICKS

 const ad="halil";
 const soyad="arica";

 console.log(ad + soyad);

 console.log("adım soyadım" + " " +  ad  + " " + soyad); 

 console.log(`adım soyadım ${ad} ${soyad}`);

 `` 
const dogumTarihi=1996

 console.log(`${ad} ${soyad} ${2024 - dogumTarihi} yasindadir`);

 //? Bazı fonksiyonlar

 Math.floor();  // her zaman en yakın alt tamsayıya yuvarlar
 Math.ceil();   // her zaman en yakın üst tam sayıya yuvarlar
 Math.trunc();  // sayının tam kısmını alır
 Math.round();  // en yakın tam sayıya yuvarlar
 Math.random(); // 0 ve 1 arasında rastgele sayı üretir