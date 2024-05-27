//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız

const dizi1=[-5,15,-78,-45,34,27,4,-9,7]

const negatifler1=[]
const pozitifler1=[]

const dizilereAyir1=()=>{

    for(let i=0 ; i < dizi1.length ; i++){

        if(dizi1[i]<0){
            negatifler1.push(dizi1[i])
        }else{
            pozitifler1.push(dizi1[i])
        }

        
    }

    console.log(pozitifler1);
    console.log(negatifler1);
}

dizilereAyir1()


//********* FOR IN */


const dizi2=[-5,15,-78,-45,34,27,4,-9,7]

const negatifler2=[]
const pozitifler2=[]

//!1.yol for in
const dizilereAyir2=()=>{
    
    for (let i in dizi2){
        if(dizi2[i]<0){
            negatifler2.push(dizi2[i])
        }else{
            pozitifler2.push(dizi2[i])
        }
    }

    console.log(pozitifler2);
    console.log(negatifler2);
}

// dizilereAyir2()

//!2.yol for of (buradaki i ler index değil gibi düşün, item gibi. (for of elemanı kucaklayıp getiriyor)

const dizilereAyir3=()=>{

    for (let i of dizi2){
        if(i < 0){
            negatifler2.push(i)
        }else{
            pozitifler2.push(i)
        }
    }

    console.log(pozitifler2);
    console.log(negatifler2);

}

dizilereAyir3();


//* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız.
//*--------------------------------------------------------


const animal = [
    "fil",
    "aslan",
    "deve",
    "fil",
    "kaplan",
    "fil",
    "deve",
    "aslan",
    "aslan",
    "aslan",
  ];

const userAnimal="deve"

const findAnimal=()=>{
    let sayac = 0
    for(let i in animal){
        if(animal[i] === userAnimal){
            sayac++
        }
    }

    return `${userAnimal} hayvanından ${sayac} adet bulunmaktadır`
}

console.log(findAnimal());



