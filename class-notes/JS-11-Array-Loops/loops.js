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

dizilereAyir2()
