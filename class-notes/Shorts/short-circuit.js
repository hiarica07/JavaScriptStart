// Short circuit, programlama terimleri içinde sıkça kullanılan bir kavramdır ve genellikle mantık operatörleri (AND, OR) ve koşullu ifadelerle ilişkilendirilir. Short circuit, bir koşulun değerlendirmesinin bir noktada durdurulması veya atlanması anlamına gelir. Bu, bazı durumları hızlı bir şekilde belirlemeye ve gereksiz işlemleri önlemeye yardımcı olabilir.

// Short circuit özellikle `&&` (ve) ve `||` (veya) mantık operatörleri ile ilgilidir.



// let toplam = 0;

// for (let i = 1; i <= 100; i++) {
//     // toplam = toplam +i; 
//     toplam += i;
// }
// console.log(` 1'den 100 e kadar olan sayıların toplamı  ` + toplam);



// let toplam2 = 0;
// for (let i = 1; i <= 10; i++) {
//     toplam2 += i * i;
// }
// console.log("1'den 10'a kadar olan sayıların karelerinin toplamı: " + toplam2);


// let n = 10;
// let faktoriyel = 1;

// for (let i = 1; i <= n; i++) {
//     faktoriyel *= i;
//     console.log(i + " faktöriyel: " + faktoriyel);
// }


for (let i=1 ; i<=10; i++){
let a = '';
for (let j=1; j<=i; j++){
    a= a +'*';
}

console.log(a);
}