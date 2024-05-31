//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const car1 = new Object({ name: "BMW", engine: 1.6, model: 2000 });
const car2 = new Object({ name: "merco", engine: 2.0, model: 2008 });

console.log(car1);
console.log(car1.name);
console.log(car1.engine); //dot notation
console.log(car1["engine"]); //square bracket
//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

const car3 = new Object({});
car3.name = "volvo";
car3.motor = 1.8;
console.log(car3);

//* ---------------------------------------------------------
//* 2-   Object Constructor (OOP ile ayrıntılı göreceğiz)
//* ---------------------------------------------------------

function Calisanlar(a, b, c) {
  this.calisanId = a;
  this.calisanName = b;
  this.calisanMaas = c;
}
//! eğer object constructor kullanacaksak this gerekli, arrow function da this kullanımı sağlıklı olmadığından burada decleration functionu kullandık

//! this keyword'u icinde bulundugu scope'daki objeyi refere eder

const kisi1 = new Calisanlar(101, "mehmet", 8000);
const kisi2 = new Calisanlar(102, "rengin", 10000);

console.log(kisi1);
console.log(kisi2);
console.log(kisi2.calisanName);

//* ---------------------------------------------------------
//* 3-   Object Literal (en çok kullanılan yol)
//* ---------------------------------------------------------

const person = {
  name: "Johny",
  surname: "Deep",
  birth: 1970,
  job: "actor",
  hasDriverLicense: true,
  languages: ["ingilizce", "almanca", "java", "next.js"],
  children: { first: "sarah", second: "lucy" },
};

console.log(person);
console.log(person.name);
console.log(person.languages[1]); //almanca
console.log(person.children.first); //sarah

//?REWRITE
person.birth += 5;
console.log(person.birth);

//?yeni property eklemek
person.location = "America";
console.log(person);

//*ornek
person.languages.map((a) => a.toUpperCase()).forEach((a) => console.log(a));

//* ---------------------------------------------------------
//*    Objects teki Yöntemler
//* ---------------------------------------------------------

const mensch = {
  name: "Johny",
  surname: "Deep",
  birth: 1970,
  job: "actor",
  hasDriverLicense: true,
  yasHesapla: function () {
    return `${this.name} oyuncusu ${2024 - this.birth} yaşındadır`;
  },
  selamla: () => "merhaba",
};
//! nesnenin içindeki değerleri kullanarak bir fonksiyon yazacaksak this keywordü kullanılmalı, arrow function this i desteklemediği için, ilk fonksiyonda decleration yöntemini tercih ettik
console.log(mensch);
console.log(mensch.yasHesapla());
console.log(mensch.selamla());

//******* */
console.log(Object.values(mensch));//object in value larını bir diziye atar
console.log(Object.keys(mensch));

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.

const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Rengin",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Kemal",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Halil",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  }]

  console.log(people);

  //*ornek1 people dizisindeki job ları göster

 people.forEach((a)=>console.log(a.job))

 //* Ornek yası 33 ün üstünde olan kişilerin name lerini listele

 people.filter((a) => a.age > 33).forEach((a) => console.log(a.name))

 //*ornek2 yaşları 1 er arttır ve sonucu yeni bir diziye aktar

 const yaslar= people.map((kisi)=>kisi.age+1)
 console.log(yaslar);
 console.log(people[0].age);

 //* Ornek3 yasları 1 er arttır, sonucu dizide kalıcı değiştir

 console.log(
 people.map((insan,i,array)=>array[i].age=insan.age+1 ))

 console.log(people[0].age);

 console.log( people.map((insan)=>insan.age+=1 ))

  console.log(people[0].age);

  

  //* Ornek4 people (object li ) dizisinden yaşları değişmiş olarak job ları olmadan yeni bir object li dizi oluşturalım,keyleri de farklı olsun

 const yeniPeople= people.map((human)=>({

isim:human.name,
soyad:human.surname,
yas:human.age+1

  }))

  console.log(yeniPeople);
  console.log(people);

  //* Ornek5 her elemanın name ini büyük harfli yaz, yaslarını 2 kat yap, job larının önüne senior kelimesi ekleyelim ve bunları yeni bir diziye atalım

  const yeniPeople2=people.map((person)=>({
    name:person.name.toUpperCase(),
     surname:person.surname,
    age:person.age*2,
    job:"senior "+person.job

  }))
  console.log(yeniPeople2);
  console.log(people);

  //* ornek6 people dizisine yeni object veri ekleyelim

 people.push({ name: "ipek", surname: "bilir", job: "developer", age: 44 }); 

 console.log(people);

 //* ornek7: Developer olanların adlarını ve yaşlarını yeni bir object olarak saklayın (keylerini de değiştir)

 const yeni=people.filter((kisi)=>kisi.job=="developer").map((a)=>({
    ad:a.name,
    yas:a.age
 }))
console.log(yeni);

//* Ornek8: ortalama yasi hesaplayiniz.
console.log(people.reduce((toplam,eleman)=>toplam+eleman.age,0) /people.length  )



//?    nested objects

const menschen = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};


//!nested object lerde  FOR - IN kullanılabilir, index sonuçta. Ama for of kullanılamaz , dizilerde verileri almak için itere eden for of object te çalışmaz
//!!!!JavaScript'te, iterable protokolü uygulamadıkça Objects iterable değildir. Bu nedenle, bir object in özellikleri üzerinde iterate yapmak için for…of (forEach, map, filter da) kullanamazsınız. sadece klasik for döngüsü ve for in kullanılabilir
//! FOR IN

for (let i in menschen){
    console.log(i);

    console.log(menschen[i]);
    // console.log(menschen.i);
    console.log(menschen[i].name);
}

//!FOR OF

// for (let i of menschen) {
//   console.log(i);  //menschen is not iterable

 
// }
for (let i of Object.keys(menschen)) {
  console.log(i);  //person1,person2...

 console.log(menschen[i]);
}

 console.log(Object.values(menschen));//bütün süslüleri diziye attı

for (let i of Object.values(menschen)) {
  console.log(i);//bütün süslüleri getirdi


}









