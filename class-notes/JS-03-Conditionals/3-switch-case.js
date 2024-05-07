//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar
//! bu bloktan çıkması için break kelimesi ile switch alanından çıkmasını sağlarız

// switch ( değişken){

//     case durum1:
//         değişken durum1 e eşit oluğunda yapılacaklar  break
//     case durum2:
//         değişken durum2 e eşit oluğunda yapılacaklar break
//         .
//         . 
//         . 
//     case durumN:
//         değişken durumN e eşit oluğunda yapılacaklar  break
//     default:
//         yukarıdaki durumların hiçbiri gerçekleşmediğinde yapılacaklar
// }


// console.log("-------------------------------------");
// console.log(" ==SWİTCH-CASE== 4 Islem Hesap Makinesi ");
// console.log("-------------------------------------");

// const sayi1 = +prompt("1. sayıyı giriniz");
// const islem = prompt("+,-,*,/ işlemlerinden birini giriniz");
// const sayi2 = +prompt("2. sayıyı giriniz");


// let sonuc

// switch (islem) {
//     case "+":

//     sonuc = sayi1 + sayi2;
        
//         break;
//     case "-":

//     sonuc = sayi1 - sayi2;
        
//         break;
//     case "*":

//     sonuc = sayi1 * sayi2;
        
//         break;
//     case "/":

//     if(sayi2 != 0) sonuc = sayi1 / sayi2;
//     else alert("payda 0 olamaz")
//     break;

//     default:
//         alert("yanlis islem girdiniz")
//         break;
// }

// console.log(`${sayi1} ${islem} ${sayi2} = ${sonuc}`)


/* ---------------------------------- */
/*           KARIŞIK SORULAR          */
/* ---------------------------------- */


//? ornek:maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın. Ternary ile

const asgariUcret = 17000;
const maas=+prompt("maasinizi giriniz")

