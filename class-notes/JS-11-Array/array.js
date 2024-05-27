//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

console.log(sayilar1.includes("5"));  // var mı yok mu.  // false
console.log(sayilar1.includes(5));  // var mı yok mu .  // true

//**indexOf() */, lastIndexOf() * /

console.log(sayilar1.indexOf("uc")); // kaçıncı sırada, 0-1-2-3-4-5-6-7-8-9... // 4
console.log(sayilar1.indexOf(5)); // 1
console.log(sayilar1.lastIndexOf(5)); // 7
console.log(sayilar1.lastIndexOf(5,2)); // 2'den itibaren 


//********** */ Örnek
//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür

// const sayiString=prompt("lütfen bir sayı giriniz")

const sayiString="5"

const sayiNumber=Number(sayiString)


if(sayilar1.includes(sayiString)){
    console.log("aradığınız sayının string hali dizide var", sayilar1.indexOf(sayiString));

}else{
    console.log("aradığınız sayının string hali yok");
}


if (sayilar1.includes(sayiNumber)) {
  console.log(
    "aradığınız sayının number hali dizide var",
    sayilar1.indexOf(sayiNumber)
  );
} else {
  console.log("aradığınız sayının number hali yok");
}


//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

console.log(sayilar1.join(" "));
console.log(sayilar1.join(""));
console.log(sayilar1.join("A"));


const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

console.log(meyveler[3].split("").reverse().join(""));

//*toString()
//? toString fonksiyonu sadece dizinin elemanlarının aralarina 
//? (virgul) koyarak birleştirir ve string yapar.

console.log(sayilar1.toString());

//*******slice() */

const araba=["bmw","mercedes","audi","ferrari","lamborgini"]

console.log(araba.slice(3)); // 3,4
console.log(araba.slice(1,3)); // 1,2

//************ concat */

const kisiler=["özlem","esra", "nihal", "fatih","hüseyin"]
const rakamlar=[1,2,3,4,5,6]

console.log(kisiler.concat(rakamlar));

const birlesik = kisiler.concat(rakamlar,true,"ayse","gökçe",["fatih","kemal"],3,[["ayca","mustafa"]])

console.log(birlesik);
// console.log(kisiler+rakamlar);

//*****every () */

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas=[18,23,34,45,56,89,15]

console.log(yas.every((a)=>a>=18)); //false
console.log(yas.every((a)=>a<90)); //true

//!1 tane bile şarta uymayan varsa false döndürür, hepsi şarta uyarsa true döndürür

//*****some 

//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

console.log(yas.some((b)=>b>90)); //false
console.log(yas.some((b)=>b>70)); //true