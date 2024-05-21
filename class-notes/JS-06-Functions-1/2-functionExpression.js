// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

//! önce fonksiyon oluşturmak şart

// const isEvenOdd=function (sayi) {

//     return sayi%2 == 0 ? "çifttir" : "tektir";  // dışarıdan görmek istediğimizde return şart.
    
// }

// const sonuc = isEvenOdd(5)
// console.log(sonuc);

// //* örnek2 verilen 3 sayıdan en büyüğünü bul.

// const buyukBul = function(a,b,c){
// let enBuyuk;    


// if(a>b && a>c) {enBuyuk=a}
// else if(b>a && b>c){enBuyuk=b}
// else{enBuyuk = c}

// return enBuyuk

// }

// console.log(buyukBul(3,4,5)); 
// console.log(buyukBul(13,4,7));


//*ornek3 arguments keywordu ile

const enBul=function(){

    let biggest = arguments[0]
    let smallest = arguments[0]

    for (let i = 1; i<arguments.length; i++){

        if(arguments[i]> biggest){
            biggest = arguments[i]
        }

        if(arguments[i]< smallest){
            smallest = arguments[i]
        }

    }
// console.log(biggest);
return `en buyuk sayı : ${biggest} en kucuk sayı: ${smallest}`
}

console.log(enBul(34,111,777,678,56,2,5678,34,6)); 



//*ornek4 bir fonksiyonun içinden başka bir fonksiyon çağırılabilir.

const usAl=function (a,b) {
    return a**b
}

const cevreBul=function (a,b) {
    return (a+b)*2
}

const alanBul=function (a,b) {
    return a*b
}

const hesapla = function (secim,s1,s2) {
    
    if(secim=="usAlırmısın"){

       console.log(usAl(s1,s2)); 

    }else if(secim=="cevreBulurmusun"){

        console.log(cevreBul(s1,s2));

    }else if(secim=="alanBulurmusun"){
        
        console.log(alanBul(s1,s2));
    }
}

hesapla("usAlırmısın",3,5)
hesapla("cevreBulurmusun",13,15)
hesapla("alanBulurmusun",2,4)


//*ornek5:-------------------------------------------------------------------------- 
//Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre, 
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "

/* -----------------------------------------------------------*/


const calculate=function(birth){
    
const ortOmur=95;
const kalanOmur= ortOmur - (2024-birth)

if(kalanOmur<0 && kalanOmur<=10){

    return "Sen bu değerleri önemseme hayatın tadını çıkar"

}else if(kalanOmur<10 && kalanOmur<=20){

    return "Gezmek görmek istediğin yerler varsa yola çıkma zamanı.."

}else{

    return `${kalanOmur} yılın var sen daha çalış ileride gezersin`
}
    
}

console.log(calculate(+prompt("Lütfen dogum yilinizi giriniz"))); 