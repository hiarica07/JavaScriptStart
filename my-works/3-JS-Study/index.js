//! teamwork-10

const arrayWithDuplicates = [1,2,2,3,4,4,5];

function removeDuplicates(a){
    let uniqueArray=[]

    for (let i in a){
        if(!uniqueArray.includes(a[i])){
            uniqueArray.push(a[i])
        }
    }

    return uniqueArray
}

console.log(removeDuplicates(arrayWithDuplicates));


// 19. Bir dizenin tüm elemanlarını sırayla döndüren bir fonksiyon yazınız.

let str = "Hello world"

function iterateString(a)
{
let array = a.split("")
let result = array.forEach((b) => console.log(b))

return result

}

iterateString(str)


//2. yol

function iterateStr(x){

    for (i=0; i<x.lengt; i++){

        console.log(x[i]);

    }
}

iterateString(str)

