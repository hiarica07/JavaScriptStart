// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.


//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

console.log("************ 1- FUNC DECLARATION *************");

// *ornek1

// Fonksiyonun tanımlanması

// yazdir() // invoke ya da call 

function yazdir() {

    console.log("ee daha daha nasılsın");
    
}

yazdir();

//* örnek2 parametreli fonksiyon

function adYazdir(a,b,c,d) {
    console.log(a,b,c,d);
}

adYazdir("ayse","mustafa","ayca");
adYazdir("kemal", "fatih","umut","halil")

//*örnek3 parametreli,dönüş değerli (return)


function yasHesapla(isim,tarih){
console.log(`Benim adım ${isim} ve ben ${new Date().getFullYear() - tarih} yasindayım`);

return new Date().getFullYear()- tarih;

}

// alert(yasHesapla("erkan", 1989))

// const gokce = yasHesapla("gokce", 1988)
// const rengin = yasHesapla("rengin", 2000)
// const mehmet = yasHesapla("mehmet", 1990)

// alert((gokce+rengin+mehmet) / 3)


//*örnek4

//tek-çift sorgulaması

console.log(isEvenOdd(5));  // call invoke
console.log(isEvenOdd(16));  // call invoke
console.log(isEvenOdd(5210));  // call invoke
console.log(isEvenOdd(111));  // call invoke

function isEvenOdd(sayi) {
const sonuc =  sayi % 2 == 0 ? "çifttir" : "tektir";
return sonuc
}

// örnek arguments keyworduyle parametre karsılama

function sumAll() {
    // arguments nesnesi fonksiyona geçirilen tüm argümanları içerir.
    // console.log(arguments);
    // console.log(arguments[1,9]);
    // console.log(arguments.length);
    
    // Toplamı saklamak için bir değişken tanımlıyoruz.
    let toplam = 0;

    // Tüm argümanları döngüyle dolaşarak topluyoruz.
    for(let i = 0; i < arguments.length; i++){
        toplam += arguments[i];
    }

    // Hesaplanan toplamı döndürüyoruz.
    return toplam;
    // console.log(toplam);
}

// sumAll fonksiyonunu çağırıp sonucu alert ile gösteriyoruz.
alert(sumAll(24, 34, 56, 35, 12, 89, 23, 45, 78, 98));





