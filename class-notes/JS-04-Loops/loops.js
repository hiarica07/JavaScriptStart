// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//? ornek ekrana 10 kere merhaba yazdırın

//******************************************************//*******************************************//*******************************************//*******************************************//*******************************************//*******************************************

// for(let index=1; index <=10; index++){
//     console.log("merhaba");
//     console.error("yanlış");
// }

//? ornek2 1 den N e kadar olan sayıların toplamı

//*******************************************
//*******************************************//*******************************************//*******************************************//*******************************************

// // const N = +prompt("lütfen bir sayı giriniz")

// // let toplam=0;
// // for(let number=1; number<=N; number++){
    
    
// //     toplam= toplam + number;
// //     console.log(toplam);
// }
//*******************************************//*******************************************//*******************************************//*******************************************

//? Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// let sayi =36;
// let primeNumber=true

// for (let i = 2; i<sayi; i++){
//     if(sayi%i==0)
//         {
//             primeNumber=false
//         }
        
// }
// console.log(primeNumber ? "asaldır": "asal degildir");


//*******************************************//*******************************************//*******************************************//*******************************************

//? 0-100 Arasinda 7 adet rastgele tam sayi üreten kodu for döngüsü ile yaziniz.



// for (let i = 1; i < 7; i++) {
//   let randomNumbers = Math.round(Math.random() * 100);
 

// console.log(randomNumbers);
// }


//*******************************************//*******************************************//*******************************************//*******************************************

//****************** */ WHİLE*************
//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

// let number = prompt("lütfen 1-100 arasında bir sayı giriniz")



// while(number<1 || number>100){
//     console.error("number 1-100 arasında olmalı")
//     number=prompt("lütfen 1-100 arasında bir sayı giriniz");
// }

// console.log("tebrikler sayı 1-100 arasında");


//*******************************************//*******************************************//*******************************************//*******************************************

//****************** */ DO-WHİLE*************
//*ORNEK1: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz

// let number1;

// do{
//     number1 = prompt("lütfen bir sayı giriniz")
// } while(number1<1 || number1>100);

// console.log("tebrikler");

//*******************************************//*******************************************//*******************************************//*******************************************
//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.

// let devamMı;
// do {
//     let vize=+prompt("vize notunuzu giriniz")
//     let final=+prompt("final notunuzu giriniz")
//     let gecmeNotu= vize * 0.4 + final * 0.6

//     console.log(gecmeNotu > 50 ? "tebrikler" : "kaldınız");

//     devamMı =prompt("devam etmek istiyorsan e tuşuna bas")
// }while(devamMı.toLocaleLowerCase()=="e")

    //*******************************************//*******************************************//*******************************************//*******************************************

//? ORNEK3: klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.

// let sayi1;
// do{
//     sayi1 =prompt("lütfen klavyeden bir tuşa basınız")

// }while(sayi1!="q")

//     console.log("ciktik");

    //*******************************************//*******************************************//*******************************************//*******************************************
//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

const rastgele=Math.ceil(Math.random()*20)
console.log(rastgele);

let hak=5;

while(hak>0){
    let guess=+prompt("sayı tahmin ediniz")
    // hak--

if(rastgele==guess){
    console.log("tebrikler dogru tahmin 👯‍♂️");
    break;
}else if(rastgele>guess){
    console.log("ARTTIR!🔺");
    hak--;    
}else{
    console.log("AZALT! 🔻");
    hak--;
}
}
if(hak==0){
console.log("5 hakkında bilemedin");
}


