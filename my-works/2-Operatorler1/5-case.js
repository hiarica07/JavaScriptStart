let deger = prompt("Dereceyi Fahreinheit'e çevirecek iseniz 'CtoF', Fahreinheit'ı Dereceye çevirecek iseniz 'FtoC' yazınız.")
let derece = parseFloat(prompt("Degerinizi giriniz"))

let sonuc;

if (deger === "CtoF"){
    sonuc = (derece * 1.8) + Number(32);
    console.log(`${derece} Derece,Fahrenheit olarak sonucu : ${sonuc} F` );
}

else if(deger === "FtoC"){
    sonuc = (derece - 32) * 5/9;
    console.log(`${derece} Fahrenheit, Derece olarak sonucu : ${sonuc}`);
}

else{
    console.log("Hatali deger yazildi, lütfen 'CtoF' veya 'FtoC' kullaniniz");
}