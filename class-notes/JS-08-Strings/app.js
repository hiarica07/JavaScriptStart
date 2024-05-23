// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");


//!1-Klasik yöntemle tanımlanan String ilkel (primitive) dir
const str1="clarusway"
const str2="hello"
const str3="all the world"

console.log(str2+str3, typeof(str2+str3) );

//!2- constructor ile tanımlanan String non-primitive (ilkel olmayan)

const str4= new String ("yeni bir String")
console.log(typeof str4);


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// concat() immutable = değiştirilemez


const s1="clarusway"
const s2="hello"

console.log(s1.concat(s2));

const s3 = s1.concat(s2);

//! orjinal değerler değişmez, assign ile kalıcı hale getirebiliriz

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================


const myName="Ipek Bilir"

console.log(myName.toLocaleLowerCase());
console.log(myName.toUpperCase());

console.log(myName.toLocaleUpperCase("tr"));

const esitMi = (a,b) => a==b.toUpperCase() ? "eşittir" : "eşit değildir"

console.log(esitMi("İSMET","ismet"));

//! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz

// *=========================================================
// *   charAt()
// *=========================================================

const s4 = "primitive \n veri tiplerinin \nproperty ya \n da methodu olmaz.";
console.log(s4);
console.log(`primitive veri tiplerinin property ya da methodu olmaz`);

console.log(s4.charAt(5));
console.log(s4.charAt(s4.length-1));

// *=========================================================
// *   includes()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime = "to be or not to be, that is The questions.";
const kelime2 = "to be or4 not to be, that is The questions.";

console.log(kelime.includes("to be")); //true
console.log(kelime.includes("TO BE")); // false
console.log(kelime.toUpperCase().includes("TO BE")); //true

console.log(kelime.includes(" ")); // true
console.log(kelime.includes("to be",14)); // false 14. index itibariyle to be yok.

console.log(kelime2.includes(4) ? "evet rakam var" : "rakam yok");

// *=========================================================
// *   search()  (REGEX)
// *=========================================================

const kelime3 = "to, be or not to be, 5 that is The questions.";

console.log(kelime3.search(/[A-Z]/)); // index döndürür 31
console.log(kelime3.search(/[a-z]/));
console.log(kelime3.search(/[0-9]/));
console.log(kelime3.search(/[0-9a-zA-Z]/));// ilk bulduğu küçük harf o yüzden 0 döndürür.
console.log(kelime3.search(/[^0-9a-zA-Z]/));// 2//

console.log(kelime3.charAt(kelime3.search(/[A-Z]/)).toLocaleLowerCase());


//* ----------------------------------------------------------
//* startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------

const cumle = "Salına salına  sinsice olurum sana!";

console.log(cumle.startsWith("sa")); //false
console.log(cumle.startsWith("Sa")); //true
console.log(cumle.startsWith("!")); 
console.log(cumle.startsWith("sa",7)); //true 7 index itibariyle sa ile başlar
console.log(cumle.endsWith("salına",13)); //13 dahil değil 13. index e kadar olan kısım salına ile bitiyor

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable (değiştirmez)
//* ----------------------------------------------------------

let oku = "Oku Johny gibi saf olma saf olma saf olma";

console.log(oku.replace("saf olma","akıllı ol"));

//?replaceAll

console.log(oku.replaceAll("saf olma", "zeki ol"));

//*2.yol

//g=global. tüm denk gelenleri değiştir
// /SAF/i;  (i=incase sensitive) yazımı büyük küçük harfe duyarsız ara demek

console.log(oku.replace(/saf olma/gi,"zengin ol"));
console.log(oku.replace(/SAF/i,"fakir"));
console.log(oku.replace(/SAF/g,"fakir"));

//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------

const veysel = "UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GÜNDÜZ GECE"

console.log(veysel.slice(10)); // BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE
console.log(veysel.slice(10,21)); // BİR YOLDAYI
console.log(veysel.substring(10,21)); // BİR YOLDAYI

console.log(veysel.slice(-10)); // UNDUZ GECE
console.log(veysel.slice(-10,-6)); // UNDU

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan = "Gel gündüzle gece olalım";

console.log(tarkan.split()); //tek elemanlı diziye çevirir
console.log(tarkan.split(" ")); //boşluklardan ayırır, diziye çevirir
console.log(tarkan.split("e")); //e leri sil e lerden ayırarak dizi yap
console.log(tarkan.split(""));// her bir harfi dizi yap 
console.log(tarkan.split("e",3));// oluşan dizinin ilk 3 elemanını getir 

//* ----------------------------------------------------------
//*  trim();
//* ----------------------------------------------------------

const ramazan = "     Hos geldin ya Sehr i Ramazan      ";
console.log(ramazan);
console.log(ramazan.trim().endsWith("n"));

//chaning

let abc = "            Clarusway Full Stack"
abc = abc.trim().split(" ")[0].toUpperCase();
// abc = abc.trim().slice(0,9).toUpperCase(); 
console.log(abc);


// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//1. yöntem (Array literal) tercih edilen yöntem

const yaslar=[30,29,45,27,12]
console.log(yaslar);

// yaslar=[1,2,3] // değişmez,hata.

//2. yöntem (Array constructor)

const cars =new Array("BMW","AUDI","MERCEDES","ANADOL")
console.log(cars);

const birth = 1979

const isimler = ["erkan","ayca","mustafa", 2024-birth,"kemal",true,yaslar]

console.log(isimler);

console.log(isimler[2]);//mustafa
console.log(isimler[6][1]);//yaslar dizisinin 29una ulaştık

console.log(--isimler[6][1]); //kalıcı olarak 1 azalt
console.log(isimler[6][1]); //kalıcı olarak azaldı
isimler[5] = false
console.log(isimler[5]);

// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

meyveler.pop()

console.log(meyveler);
console.log(meyveler.pop());

//*shift() dizinin ilk elemanını siler.yazdırırsak sildiği elemanı döndürür.

console.log(meyveler.shift());
console.log(meyveler);

//*push() dizinin sonuna eleman ekler yazdırırsak dizinin güncel eleman sayısını döndürür

meyveler.push("çilek","kavun","karpuz")
console.log(meyveler);
console.log(meyveler.push());

//*unshift() dizinin başına eleman ekler,yazdırırsak dizinin güncel eleman sayısını döndürür

meyveler.unshift("Ayva")
console.log(meyveler);

//*reverse() dizinin tamamını ters çevirir (sadece dizide çalışır)

meyveler.reverse()

console.log(meyveler);

console.log(meyveler[3].split("").reverse());

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

meyveler.splice(2,1,"ananas")

console.log(meyveler);

meyveler.splice(3,0,"Çilek")

console.log(meyveler);

meyveler.splice(4,1)

console.log(meyveler);

//*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

meyveler.sort()

console.log(meyveler);

const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

// number.sort((a,b)=>a-b) // düzgün sıra
number.sort();

console.log(number);











