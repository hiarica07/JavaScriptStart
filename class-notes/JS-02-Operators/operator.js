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

 //toFixed(x) // virgülden sonra x adet basamak bırak. 


 const ab=-1.3
 console.log(Math.trunc(ab));
 console.log(Math.floor(ab));
 console.log(Math.ceil(ab));
 console.log(Math.round(ab));
 console.log("**************");
 const ba=-1.3;
 console.log(Math.trunc(ba));
 console.log(Math.floor(ba));
 console.log(Math.ceil(ba));
 console.log(Math.round(ba));

//  document.write(Math.trunc(ba));

 // RANDOM: rastgele
 // rastgele sayı üretir
 // 0-1 arasında bir sayı üretir

 console.log(Math.random());
 console.log(Math.ceil(Math.random()*20));

 const randomSayi=Math.random();
 console.log(randomSayi);
 console.log(randomSayi.toFixed(2));

 // sayiyi stringe çeviriyor toFixed //

 console.log(Math.random().toFixed(2));

 let a=5

 console.log("ilk", a++); //5
 console.log("ikinci",a); //6

 let b=a++
 console.log(b); //6
 console.log(a); //7
 
 let c=10
 console.log("ilk", ++c); //11
 let d=++c
 console.log(d); //12
 console.log(c); //12

 let e=33
 console.log(--e); //32
 console.log(e--); //32
 console.log(e);

 //! e yi 5 arttır
    //  e=e+5

    console.log(e+=5);

    // e yi 5 ile çarp

    console.log(e*=5); //180

    //? ÇARPMA VE ÜS ALMA

    const PI = 3.14
    const r = 5

    const alan= (PI*(r**2));
    console.log(alan);

    // ! Math pow(power) bir sayının kuvetini almak için kullanılır  *****

    console.log(PI*Math.pow(r,2));

    // Math.sqrt : verilen değerin karakökünü verir

    console.log(Math.sqrt(144));


    // ********MOD ALMA ******/

    const number=456

    console.log("birler", number%10);

    console.log("onlar", Math.trunc (number/10)%10);

    console.log("yüzler", Math.trunc(number/100));


    // KARŞILAŞTIRMA OPERATORLERİ //

    const sayi4=4;

    console.log(sayi4==4); // eşit mi
    console.log(sayi4===4); // eşit mi (number=number)
    console.log(sayi4=="4"); // eşit mi 
    console.log(sayi4==="4"); // eşit mi (number=string = false) 

    console.log(sayi4!=4); // eşit değil mi? / false
    console.log(sayi4!=5); // eşit değil mi? / evet

    console.log(sayi4!="4"); // eşit, false. 

    console.log(sayi4> 4); // büyük mü? false
    console.log(sayi4 >= 4); // true 

    // * =======================================================
// *         MANTIKSAL OPERATORLER (logical operators)
// * =======================================================


console.log("***************");

//? TRUE

console.log(Boolean(5));
console.log(Boolean(5.8));
console.log(Boolean(-5.8));
console.log(Boolean([1,2,5]));

//? 5 FALSE

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); // Not a Number

console.log("*************");

const v1= false || 0 || 12.6 || false || null ;
console.log(v1);
console.log(Boolean(v1));
const v2= false || 0 || NaN || null || undefined || NaN;
console.log(v2);
console.log(Boolean(v2));


const v3= 5 && true && 0 && ""
console.log(v3); // ilk bulduğu yanlışı çevirir, gösterir "0"
console.log(Boolean(v3)); //false

const v4= 5 && 12.6 && -7;
console.log(v4); // 7
console.log(Boolean(v4)); // true


// * =======================================================
// *                 TİP DÖNÜŞÜMLERİ
// * =======================================================

const para= Number ("1000") +Number("900")
console.log(para);

let aa = 10
let bb = '5'

console.log('Toplama', aa + bb) //105   // toplamada number a çevirmek gerekir. 10ve5 i birleştirir.
console.log('Çıkarma', aa - bb) // 5   // sadece mat a ait olduğu için çalışır.
console.log('Çarpma', aa * bb) // 50   // sadece mat a ait olduğu için çalışır.
console.log('Bölme', aa / bb) //2      // sadece mat a ait olduğu için çalışır.

console.log(typeof bb); // string
console.log(bb**2);

// toplama dışındaki tüm işlemlerde string-number sıkıntısı yok. //

let ee = "123.45"

console.log(parseInt(ee));  // string tam çevir, tam sayısını göster
console.log(parseFloat(ee)); // string tam çevir, virgülü de göster.






 