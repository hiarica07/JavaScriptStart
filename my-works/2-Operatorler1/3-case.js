let a = 7
let b = 6
let c = 6

let enKucuk
let enBuyuk
let totalCarpim
let totalToplam

if (a<b && a<c){
    enKucuk = a;
}

else if(b<a && b<c){
    enKucuk = b;
}

else{
    enKucuk = c;
}


if (a>b && a>c){
    enBuyuk = a;
}

else if(b>a && b>c){
    enBuyuk = b;
}

else{
    enBuyuk = c;
}

totalCarpim = a * b * c;
totalToplam = a + b + c;

console.log("Sayilarin carpimi = ", totalCarpim);
console.log("Sayilarin toplami =" , totalToplam);
console.log("Girilen en buyuk sayi =" , enBuyuk);
console.log("Girilen en kucuk sayi =" , enKucuk);

