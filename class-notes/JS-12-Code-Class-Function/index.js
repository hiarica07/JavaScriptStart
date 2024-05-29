// Dizi metodları
// pop(): dizinin son elemanını siler
// shift(): dizinin başındaki elamanı siler 
// push(): diziniz sonuna eleman ekler
// unshift() : dizinin başına eleman ekler 
// reverse() : diziyi tersine çevirir 
// splice():(başlangıç indexi, kaç eleman alınacak(silinecek), eklenecek eleman (item1, item2...))
// sort(): sıralama yapar(stringlerde ifadelerde ascii kodlara göre alfabetik sıralama ) 
// sort((a,b)=> a-b )
// includes(deger): içeriyomu (trıe - false)
// indexOf(deger): değerin kaçıncı indexte olduğunu 
// join(" "): bir dizideki elemanları birleştirerek stringe çevirir 
// slice(): diziden bir parçayı almamaızı sağlar 
// concat(): iki diziyi birleştirir
// every: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır.ve call fonksiyondaki şartı sağlıyosa true değer çevirir


// const numbers = [45,16,34,23]
// numbers.every((num)=>num > 18) //false

// some: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır. ve  fonksiyondaki en az bir şartı sağlıyosa true değer çevirir

// const numbers = [45,16,34,23]
// numbers.some((num)=>num > 18) //true

/*-----------------------------------------*/

// map: bir dizi için bir callback fonksiton çalıştırır. vd her eleman için o fonksiyondan çıkan sonucu bir diziye aktarır.
// forEach: bir dizi için bir callback fonksiton çalıştırır. Geriye bir değer döndürmez
// filter: bir dizi için bir callback fonksiton çalıştırır. Verilen koşulu sağlayan bir değer döndürür
// reduce: dizidekii elemanları toplayarak tek bir değere döndürür

/*-----------------------------------------*/

//! 1.Bir dizideki elemanların ortalamasını bulan fonksiyon

const numbers = [34, 56 ,56 ,87 ,90];

const ortalama = arr => arr.reduce((acc,arr)=> acc + arr) / arr.length

console.log(ortalama(numbers));


// 2. yol 

let toplam = 0

const ortalama2 = () => {

    for (let i=0; i < numbers.length; i++)

        toplam = toplam + numbers[i]

        return toplam
}

console.log(ortalama2()/numbers.length);

// 2- Girilen bir cümledeki kelime sayısını bulan fonksiyon
// sentence="Merhaba Cohort DE-09"


const sentence="Merhaba Cohort DE-09"

const kelimeSayisi=(a)=> a.split(" ").length

console.log(kelimeSayisi(sentence))

//!Size bir  cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir:
//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.
//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

// test: "I like Clarusway"  // Output : I found at Clarusway at 3!
// test : "I like bootcamps " // Output  I can't find Clarusway :disappointed:

// const findClarusway = function (x) {
//     const arr = x.split(" ");
//     return x.includes("Clarusway")
//       ? `I found Clarusway at ${arr.indexOf("Clarusway")+1}`
//       : `I can't find Clarusway`;
//   };
  
//   console.log(findClarusway(x));


  //! Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program
// removeDuplicated([1,0,1,0,1]) // Output [1,0]
// removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"]

// Yinelenen öğeleri kaldıran ve eski sırayla yeni bir dizi döndüren fonksiyon
const removeDuplicated = arr => arr.filter((item, index) => arr.indexOf(item) === index);

console.log(removeDuplicated([1, 0, 1, 0, 1])); // [1, 0]
console.log(removeDuplicated(["the", "small", "cat", "the", "cat"])); // ["the", "small", "cat"]

//!Bir dizide ilk harfi A ile başlayan elemanları yeni bir diziye alan fonksiyon 

const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

let newWords = words.filter((a)=> {a[0] === "A"} )

console.log(newWords);

// harvey hoca ile çözüm

function filterWords(arr){
    const newArr = arr.filter((word)=>word[0] === "A" )

    return newArr
}

console.log(filterWords(words));


//! bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak
// a- Kaç kişi zam olsa bile 20000 altında kalıyor

let salaries=[18000,13000,17000,24000,18500,21000,19300]

let newSalaries = salaries.map((a) => a*1.1 )
let dusukKalanlar = newSalaries.filter((a) => a < 20000)

console.log(newSalaries,dusukKalanlar);

// b- Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı

let gerekliPara = dusukKalanlar.reduce((c, d) => c + (20000 - d), 0);

console.log(Math.round(gerekliPara));

