// ^ And operatörü

//  & Truthy value with &&
// console.log(2 && 5) //5

// console.log(Boolean(2 && 5));


// & object / Array  with &&

// console.log({} && "Hello"); //Hello
// console.log([] && "Hello"); //Hello

// console.log(Boolean([])) //true
// console.log(Boolean({})) //true 
15
// & Falsy value with &&
// console.log( 0 && 7) //0
// console.log( '0' && 7) // 7
// console.log(Boolean(0))

// & Falsy string with &&

// console.log('' && 'World') // ilk değer boş string döner
// console.log("" && 'World') //
// console.log(`` && 'World') //

// & Falsy null with &&

// console.log(null && 'Hello World') //
// console.log(NaN && 'Hello World') //
// console.log(null && NaN) //null 


//  ^ OR operatörü ||

// & Truthy value with ||

// console.log(2 || 5) //2

// & Falsy value with ||

// console.log(0 || 7) //7

// console.log(0 || '') //boş string döner

// & object / Array  with ||

// console.log({} || "Hello"); // {}
// console.log([] || "Hello"); // []

// & Falsy null with ||

// console.log(null || 1) //1
// console.log(null || NaN) //NaN 


// let yas = 19;

// if (yas>=18) {
// console.log("Sigara kullanabilir");    
// } else if (yas<18) {
//     console.log("Sigara Kullanamaz");
// }else{
//     console.error("Yanlış giriş yapıldı");
// }

// Ternary ile

// let age = +prompt("Lütfen yasinizi giriniz");

// console.log(age >= 18 ? "Sigara kullanabilirsiniz" : "Sigara kullanamazsiniz");
// age >= 18
//   ? console.log("sigara kullanabilirsiniz")
//   : console.log("sigara kullanmazsiniz");

//   let response = (age >= 18) ? "sigara alabilir" : "sigara alamaz";
// console.log(response);

//isNaN

// let x = +prompt("Bir sayı giriniz :")
// console.log(isNan(x));

//*ornek kullanıcının sayı girene kadar tekrar giriş yapmasını sağlayan while yapısını yazın


// let sayi = +prompt("lütfen bir sayi giriniz");
// while (isNaN(sayi)) {
//   sayi = +prompt("lütfen yeni bir sayi giriniz");
// }
// console.log("girilen Sayi" + sayi);1


// let a1;
// do {
//   a1 = prompt("Lütfen bir sayı girin:");
// } while (isNaN(a1));
// console.log("Girilen sayı:", a1);


// const user = "Halil";
// const pass = 4593;
// let hak = 3;

// while (hak > 0) {
//   let username = prompt("Kullanıcı adınızı girin:");
//   let password = +prompt("Parolanızı girin:");

//   if (username === user && password === pass) {
//     alert(`Hoş geldiniz, ${username}!`);
//     break;
//   } else {
//     hak--;
//     if (hak > 0) {
//       alert("Kullanıcı adı veya parola yanlış. Lütfen tekrar deneyin.");
//     } else {
//       alert("3 kez yanlış girdiniz.");
//     }
//   }
// }


// let username = "Ali";
// let password = 1234;
// let hak = 3;
// while (hak > 0) {
//   let usernameP = prompt("Kullanıcı adınızı giriniz:");
//   let passwordP = prompt("Parolanızı giriniz:");
//   if (usernameP == "Ali" && passwordP == 1234) {
//     console.log("Giriş başarılı!");
//     break;
//   } else {
   
//     hak--;
//      console.log(
//        "Kullanıcı adı veya parola yanlış. Kalan hakkınız: " + hak 
//      );
//   }
// }
// if (hak == 0) {
//   console.log("Üç kez yanlış giriş yapıldı. Lütfen daha sonra tekrar deneyin.");
// }


// for (let i=1 ; i<=5; i++){
//     let a = '';
//     for (let j=1; j<=i; j++){
//         a= a + '*';
//     }
//     console.log(a);
//     }


// const height = 4;

// for (let i = 1; i <= height; i++) {
//   console.log(' '.repeat(height - i) + '#'.repeat(2 * i - 1));
// }


// let height = 5;

// for (let i = 0; i <= height; i++){
//     let row = '';
//     for(let j = 0; j< i; j++){
//         row = row + '*';
//     }
//         console.log(row);
// }


// kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız

// let toplam = 0;
// let sayi = 5;

// for (let i = 1 ; i <= sayi; i++){
//     let input = +prompt("Lütfen bir sayı girin");
//     toplam = toplam + input;

// }

// let ortalama = toplam / sayi;
// console.log("Girilen sayıların ortalaması:", ortalama);


//*örnek6 1000 ile 2000 arasındaki hem 3 hem 5 e bölünebilen sayıların adedini konsola yazdıran çözüm

// let number = 0;
 

// for (let i = 1000 ; i<=2000; i++){
//     if (i % 3 == 0 && i % 5 ==0){
//         number++;
//     }

// }

// console.log(number);

//*Armstrong number while solution

// Verilen sayının tüm basamaklarının sayı değerlerinin o sayının basamak sayısı kadar üssü alınarak toplamının kendisine eşit olmasıdır.555


let num = +prompt("Enter a number:");
let originalNumber = num;
let sayac = 0;
let sum = 0;



while (originalNumber != 0) {
  originalNumber = Math.floor(originalNumber / 10);
  sayac++;
}

originalNumber = num;

while (originalNumber > 0) {
  let sayi = originalNumber % 10; // 153 / 10 = 15.3
  sum += sayi ** sayac;
  originalNumber = Math.floor(originalNumber / 10);
}

sum == num
  ? console.log(num + " is an Armstrong number.")
  : console.log(num + " is not an Armstrong number.");





