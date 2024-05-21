// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Örnek1:3 ün katı olup olmadığını kontrol eden fonksiyon.

const control = (sayi) =>
  sayi % 3 == 0 ? "3'ün katıdır" : "3'ün katı değildir.";

console.log(control(34));


//* Örnek2:Menu fonksiyon
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
    console.log("===========================");
    console.log("     JAVASCRİPT DERSİ      ");
    console.log("===========================");
  };

  menu()

  //*Örnek3: silindirin hacmini hesapla (pi*r**2*h)

  const hacimHesapla=(r,h)=> 

    Math.PI*r*r*h
  
   console.log(hacimHesapla(3,5).toFixed(2));    
