console.log("**** NEW GEN OPERATORS *****");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
  id: "12345",
  brand: "Apple",
  type: "smart Phone",
  price: 3000,
};
const product1 = {
  id: "123456",
  brand: "Samsung",
  type: "mobile phone",
  price: 5000,
};

//? .notasyonu ile erişim mümkün

console.log(product.type);

let proPrice = product.price;

console.log(proPrice);

proPrice += 100;

console.log(proPrice);

console.log(product.price);

// product.price = proPrice

// console.log(product.price);

//? square bracket

console.log(product["brand"]);

//? DESTRUCTURING yöntemi
// değişken isimleri objedeki keylerle aynı olmalıdır.
//? Keyler isim değişikliler: ile yapılır

let { id, price, brand, type } = product;

console.log("ID:", id);
console.log("Brand:", brand);
console.log("Type:", type);
console.log("price:", price);

price += 500;

console.log(price);
console.log(product.price);

const {
  id: pro1Id,
  price: pro1Price,
  type: pro1Type,
  brand: pro1Brand,
} = product1;

console.log(pro1Brand, pro1Id, pro1Price, pro1Type);

//? NESTED DESTR
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};

console.log(insanlar.kisi2.meslek);
console.log(insanlar["kisi2"]["meslek"]);

//?Level1 Destr

//   const {kisi1,kisi2} = insanlar
//   console.log(kisi1);

//?Level2 Destr

//   const {adi,kimlikNo,soyadi,meslek,maas} = kisi1
//   console.log(adi,kimlikNo,soyadi,meslek,maas);

//? Level3 Destr

const {
  kisi1: { adi, soyadi },
  kisi2: {adi: kisi2Ad, soyadi:kisi2Soyad}
} = insanlar;

console.log(kisi2Soyad);

//* Example
const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "John",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ]

  //! ---- FUNCTIONLARDA DESTRUCT KULLANIMI -------

  const objGoster = function () {
    
    return{
        name:"Hazel",
        surname:"Nut",
        jobe:"team Lead",
        age:40
    }


  }

  let {name,surname,job,age} = objGoster()
  console.log(name);
  console.log("Age", ++age);


  //?Fonksiyon Parametresi

  const data = {
    id:"123",
    desc:"This is top secret information",
    createdTime:"1980"
  }

  const printData = (data) =>{
    console.log(`${data.id}- ${data.desc} - ${data.createdTime}`);


  }

  const printDataDestr = (data) => {
    const {id,desc,createdTime} = data
    console.log(`${id} - ${desc} - ${createdTime}`);
  }

  const printDataAir = ({id,desc,createdTime}) => {

    console.log(`${id}- ${desc} - ${createdTime}`);

  }

  printData(data)
  printDataDestr(data)
  printDataAir(data)


//* =============================================
//*  DESTRUCTURING (ARRAY)   heap , -stack kavramlarının felsefesinae bak.
//* =============================================

const people = ["Ali","Veli","Harvey","Ashley"]

let ali = people[0]
console.log(ali);

const [kisi1,kisi2,,kisi4] = people

console.log(kisi1,kisi2,kisi4);

//* ==============================================
//*  REST (...)
//* =============================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//?ARRAY

const araclar = ["Kamyon","Tır","Kamyonet","Motosiklet","Minibüs","Taxi"]

const [arac1,arac2,arac3,...binekAraclar] = araclar

console.log(arac3);
console.log(binekAraclar);

//?Object

const person = {
    ad:"Hazel",
    soyad:"Nut",
    is:"team Lead",
    yas:40,
}

const {ad,soyad,...geriKalanlar} = person

console.log(person,geriKalanlar);

//!2-Bir fonksiyonun argumanlarını diziye çevirmek için kullanılır.

const topla = (a,b) => a+b

console.log(topla(1,5,7,9,3));

const toplam = (...sayılar) => {  // diziye çevrilmiş oldu
    return sayılar.reduce((a,b)=> a+b) // reduce kullandık diziye çevrildiği için
}

console.log(toplam(1,5,7,9,3));


//* =============================================
//*  SPREAD (...)
//* =============================================

//? Spread operatoru ise itrables olan bir elemanı bireysel degerler haline getirir.

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"]
const karaAracları = ["araba", "bisiklet", "marti"]

const tasitlar = [ucanAraclar,karaAracları]

const flatTasitlar = [...ucanAraclar,...karaAracları]

console.log(flatTasitlar);

// Ornek

const cumle = "Uzun ince bir yoldayım"
const cumleDizisi = [...cumle]
console.log(cumleDizisi);

//? Ornek

const numbers = [1,3,4,5]
const numbers1 = [...numbers]
console.log(Math.max(...numbers1));

//? nested
const sahislar = {
    sahis1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    sahis2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    sahis3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  }


  //? Javascript'de Objeler default olarak iterable değgildir.
  //? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu metotlar aslında objelerin key ve

//! For-in

for(let s in sahislar){
    console.log(sahislar[s].salary);
}


//? Kullanışlı Object metotları
console.log(Object.keys(sahislar)) //? objenin key'leri array olarak doner
console.log(Object.values(sahislar)) //? objenin value'larını array olarak doner
console.log(Object.values(sahislar.sahis2)) //? objenin value'larını array olarak doner
console.log(Object.entries(sahislar)) //? objenin key-value ciftini array olarak doner
console.log(Object.entries(sahislar.sahis1)) //? objenin key-value ciftini array olarak doner



for (const key of Object.keys(sahislar)) {
    console.log(sahislar[key].salary);
}

console.log("**************************");

for (const v of ) {
    
}

