// Değişken bir değer tutar ve çağrıldığında o değer işleme girer 

// CONTS : constant : sabit 

console
const degiskenAdi="Javascript";
const sayi=6
console.log(typeof degiskenAdi);
console.log( degiskenAdi);
console.log(typeof sayi);

// degiskenAdi="osman" 

// const ile tanımlanan değişken değiştirilemez 

const isTrue=true;
const isFalse=false;
console.log(typeof isTrue);


// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil="javascript";

dil="java"

console.log(dil);

let sayi2=34;

console.log(sayi2 + 7);

let sayi3="34"

console.log(sayi3 + 7);

//! bir string ile number toplanırsa aslında toplama yapmaz, onları iki kelime gibi yanyana yazar

console.log(sayi3 - 4);


// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

var sayi4=67;
sayi2=100


console.log("**************************");

var ilk ="global"
console.log(ilk);

{
    console.log(ilk);

    ilk="naber"

    console.log(ilk);

    var ikinci="nasılsın"
}

console.log(ilk);
console.log(ikinci);  //var olduğu için süslü parantez içindeki değişkene dışarıdan da erişildi.


let first="osman"
console.log(first);

{
    console.log(first);

    first="hüseyin"

    let second=45;

    console.log(second);
}

console.log(first);

// console.log(second);

console.log("******************");

//! CONST SCOPE

const erste="mustafa"

console.log(erste);

{

    console.log(erste);
    // erste="uslu" degistirmeye calisinca hata alıyoruz 

    const zweite="ayca"
    console.log(zweite);

}

// console.log(zweite); süslü parantez içinde olduğu için hata 

