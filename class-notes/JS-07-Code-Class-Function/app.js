// !!decleration

islem(10,13)

function islem (par1,par2,par3){
    console.log(par1);
    console.log(par2);

    return par1+par2+par3;
}


let add = islem (3,4,5)
console.log(add);

//!expression

const topla1=function(a,b){
    return a+b;
}

console.log(topla1(3,5));


//!arrow

const topla2 = (a,b) => a+b;


console.log(topla2(3,5));

//exp

let isim ="ashley miller"

console.log(isim[8]);
console.log(isim.length);

//! 1-Celcius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız (Celsius x 9/5) +35 = Fahrenheit

//default çözüm

function abc(celcius){
    return (celcius * 9/5) + 32;

}

console.log(abc(0));
console.log(abc(32));
console.log(abc(100));

//ikinci çözüm (arrow)

const cevir = (c) => (c * 9 / 5) + 32 ;
console.log(cevir(23));

//! 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?

function reverseString(str){

    let newStr = ""

    for (let i = str.length -1 ; i>=0; i--){


        newStr = newStr + str[i]

    }

    return newStr
}

console.log(reverseString("hello"));


//!3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız.
// polindrom = herhangi bir ifadenin tersten okunuşunun da kendisi ile aynı olması


let a = "anastas mum satsana"

const polindrom = function (a) {
  let ceviri = "";
  for (i = a.length - 1; i >= 0; i--) {
    ceviri = ceviri + a[i];
  }
  return ceviri;
};
a == polindrom(a)
  ? console.log(`${a} polindrom bir ifadedir`)
  : console.log(`${a} polindrom bir ifade degildir`);


  //3.1 

  const string1="ey edip adanada pide ye"

  function isPalindrome(str){
    let ters="";

    for(let i = str.length - 1 ; i >=0; i--){
        ters = ters + str[i];
    }

    return ters == str ? "palindromdur" : "palindrom değildir."

  }

  console.log(isPalindrome(string1));


  // 4- Bir sayıyı tersine çevirecek bir fonksiyon yazınız.
  // 1. yol

  const ters =(num)=>{

    let numStr = num.toString()
    let reverse = ""

    for (let i = numStr.length -1; i>=0; i--){
        reverse = reverse + numStr[i];
    }

    return reverse
  }

  

  console.log(ters(456));


//*2.yol

const ters2=(num)=>{

    let reverse=0

    while(num!=0){

        reverse=reverse*10
        reverse+=num%10

num=Math.trunc(num/10)

    }

return reverse
}

console.log(ters2(4567));

//! 4- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?

function bolen(sayi3){

    let sum = 0;
    
    for(let i = 1; i <= sayi3; i++){
        if (sayi3 % i === 0){
            sum = sum + i;
        }
        
    }
return sum;
}

console.log(bolen(6));


//! 5- İlk 2 parametreyi çarpıp 3. parametreyi üs olarak alan fonksiyonu yazınız?

function soru5(a,b,c){

let hesap = a * b

return hesap ** c;

}

console.log(soru5(2,3,3));


//! 6- 100-1000 e kadar olan sayılardan polindrom olanlarını belirten/yazan program

const reverseNumber = (num) => {
    let numStr = num.toString();

    let reverse = "";

    for (let i = numStr.length - 1; i>=0; i--){
        reverse += numStr[i];
    }

    return parseInt(reverse)==num ? `${num} polindromdur` : `"${num} polindrom degildir.`
}

for (let i = 100; i<1000; i++){
    // console.log(reverseNumber(i));
}


//7-Yarıçapı verilen bir dairenin alan ve çevresini bulan program


function soru6(r){
    return `${2*Math.PI*r} cevresidir ${Math.PI*r*r} alanidir`
}

console.log(soru6(3));


//8-? tellFortune adlı bir fonksiyon yazın:
  //? 4 farklı parametre : jobTitle, geoLocation, partner, numKids.
  //? falınızı ekrana şu şekilde verir: "Gelecekteki mesleğiniz *****'dir. ****'da yaşayacaksınız. **** ile evlenecek ve *** çocuk sahibi olacaksınız"

function tellFortune(jobTitle,geoLocation,partner,numKids){
    return `${jobTitle} mesliginiz, ${geoLocation} de yasayacaksiniz ${partner} ile evlenecek ve ${numKids} çocuk sahibi olacaksınız`
}

console.log(tellFortune("Mekatronik Mühendisi","Antalya","Abc",2));



const compoundInt = function (principalAmount, intRate,time,n) {
    
    let result = principalAmount * Math.pow((1 + intRate / n), n * time);
    return result;
  }

  console.log(compoundInt(1000,0.2,1,4));

