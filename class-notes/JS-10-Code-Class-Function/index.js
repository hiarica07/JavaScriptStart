//********************************************************** */
//********************************************************** */
//********************************************************** */
//********************************************************** */

// let isimler = ["harvey","ashley","tolga","fatih","gokce"]
// let bos=["ahmet"]

// console.log(typeof(isimler[0])); // type'ı
// console.log(isimler.length);   // dizi uzunluğu
// console.log(Boolean(bos)); // true
// console.log(Boolean(bos.length)); // false

// bos.length ? console.log("veri geliyor") : console.log("veri gelmiyor");

//********************************************************** */
//********************************************************** */
//********************************************************** */
//********************************************************** */

// for,while,do while,forEach

// for (let i = 0; i < isimler.length; i++) {
//     console.log(isimler[i]);

// }

//********************************************************** */
//********************************************************** */
//********************************************************** */
//********************************************************** */

// let sayac = 0

// while (sayac < isimler.length) {

// console.log(isimler[sayac]);
// sayac ++

// }

//********************************************************** */
//********************************************************** */
//********************************************************** */
//******************     forEach       ********************* */

// isimler.forEach(isim=>console.log(isim))

//********************************************************** */
//********************************************************** */
//********************************************************** */
//********************************************************** */

//! 1- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız? // REGEX

// let str = "Uzun zaman once uzak bir ulkede"
// let sesliHarfler = str.match(/[aeiouAEIOU]/gi)
// console.log(sesliHarfler);

let hello = "hello world"; // eoo

function findVowels(str) {
  let vowels = "aeıioöuü";
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(findVowels("hello world"));

//2- bir dizi içerisindeki en büyük sayıyı bulan fonksiyonu yazınız

let sayi = [1, 2, 8, 5, 4, 0];

function enBuyuk(sayi) {
  let maxNumber = [0];

  for (let i = 0; i < sayi.length; i++) {
    if (sayi[i] > maxNumber) {
      maxNumber = sayi[i];
    }
  }
  return maxNumber;
}
console.log(enBuyuk(sayi));

//3- Bir dizi içerisindeki sayıları toplayan fonksiyonu yazınız

let sayilar1 = [1, 2, 3, 4, 5, 6]; // 10

function toplam(sayilar1) {
  let sayilarinToplami = 0;

  for (let i = 0; i < sayilar1.length; i++) {
    sayilarinToplami = sayilarinToplami + sayilar1[i];
  }

  return sayilarinToplami;
}

console.log(toplam(sayilar1));

//4- Bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız

let sayilar2 = [1, 2, 3, 4]; // 10

function toplam(sayilar2) {
  let sayilarinToplami2 = 0;

  for (let i = 0; i < sayilar2.length; i++) {
    sayilarinToplami2 = sayilarinToplami2 + sayilar2[i];
  }

  return sayilarinToplami2 / sayilar2.length;
}

console.log(toplam(sayilar2));

//5-Girilen bir cümledeki kelime sayısını bulan fonksiyonu yazınız.

let cumle = "Uzun zaman once uzak bir ulkede";

function kelimeSayisi(cumle) {
  return cumle.split(" ").length;
}

console.log(kelimeSayisi(cumle));

//6-Bir cümleyi alın ve kelimeleri ters sırasıyla birleştirerek yeni bir cümle oluşturun

let cumle1 = "Uzun zaman once uzak bir ulkede";

function tersCumle(cumle1) {
  return cumle1.split("").reverse().join("");
}

console.log(tersCumle(cumle1));

//! 7- Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.

// const names = []

// while (true){
//     let name = prompt("Lütfen bir isim giriniz")

//     if (name === "q") {

//         names.pop()
//         break;
//     }

//     names.push(name)

// }

// console.log(names);

//! 8- Kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu fuction declaration ve arrow function ile yazınız.

function yasHesabi(isim, dogumTarihi) {
  const mevcutYil = new Date().getFullYear();
  const dogumYili = dogumTarihi;

  const yas = mevcutYil - dogumYili;

  return `${isim}, ${yas} yasindadır`;
}

console.log(yasHesabi("Halil", "1996"));

// arrow ile

const yasHesabiArrow = (isim, dogumTarihi) => {
  const mevcutYil2 = new Date().getFullYear();
  const dogumYili2 = dogumTarihi;
  const yas = mevcutYil2 - dogumYili2;

  return `${isim}, ${yas} yasindadır`;
};

console.log(yasHesabiArrow("Halil", "1996"));

//! 9- isimler1 dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.

const isimler1 = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

const newa = [];

for (let i = 0; i < isimler1.length; i++) {
  const element = isimler1[i].toLowerCase();

  newa.push(element);
}

console.log(newa);

//! 10- bir sayının faktöriyelini bulan programı yazınız

function faktoriyel(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * faktoriyel(n-1);
  }
}

console.log(faktoriyel(3));


//! 11-kayıp sayıyı bulun

const sal = [5,2,6,1,3,7]    // reduce() bi bak.

const findNumber = (arr) =>{

    let total = (arr.length+1)*(arr.length+2) / 2

    let arrTotal = sal.reduce((acc,curr) => {

        console.log("ne geliyor",acc);

        return acc + curr
    })

    return total - arrTotal
}

console.log(findNumber(sal));
