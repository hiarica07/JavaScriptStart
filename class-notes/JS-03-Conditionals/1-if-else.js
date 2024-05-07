// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.

// ****************************************************************** //

// console.log("-------------------------------------");
// console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
// console.log("-------------------------------------");


const sayi1=+prompt("1.Lutfen sayiyi giriniz");
const islem=prompt("+,-,*,/ islemlerinden birini giriniz");
const sayi2=+prompt("2.Lutfen sayiyi giriniz");

let sonuc

if(islem == "+"){
   sonuc = sayi1 + sayi2;
}

else if(islem == "-"){
   sonuc = sayi1 - sayi2;
}

else if(islem == "*"){
   sonuc = sayi1 * sayi2;
}

else if(islem == "/"){

    if(sayi2!=0){

sonuc = sayi1 / sayi2;}

    else {
        alert("payda 0 olmaz")
    }
}

else {
    alert("yanlis islem girdiniz")
}

console.log(sonuc);

// ************* */

if(sonuc!=0){
    console.log("tebrikler bir deger elde ettiniz");
}

//? kısa 1. yol

if(sonuc){
console.log("tebrikler bir değer elde ettiniz");
}

// kısa 2. yol (short circuit)

sonuc && console.log("komik olma kuzen Larry");




// *************************************** //
//* ornek



const age = 32;
const gender = "erkek";
const health = true;
let message;

if(age>=20 && gender == "erkek" && health==true){
    console.log("askerlik yapabilir");
}

else{
    console.log("askerlik yapamaz");
}

