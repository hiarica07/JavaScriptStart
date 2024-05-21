// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 5- SCOPE *************");

let first = 5
let second = 12
let third = 456

console.log(first,second,third);

const scopeFunction = () =>
    {

first = 8

// let sayesinde yeni bir değişken oluşturuldu ve dışarıdan erişilemez

let second = 1234 // function scope
console.log(second);

let fourth=second + first // 1234 + 8

return fourth

}

console.log(scopeFunction()); 

console.log(first);
console.log(second);


//******************************** * * ** * * * * */


let number = 11

const fonk = () => {

    let number = 44 //! function scope

    number++

    // console.log(number);

    return number
}

fonk()


console.log(fonk()); // 45
console.log(number); //11

//zorlamayla içerideki number ı fonk return ü sayesinde,globaldeki number değişkenine assign ettik.
number = fonk() //global scope taki number ı function scopedaki number a eşit hale getirdik.

console.log(number);


//***************************** */

{


number++

let x = 5
let y = x + 15
console.log(y); //!blok-scope

}

console.log(number);


//? VAR

number2=100

var number2;//!hoisted(number 2 ye sonradan type atandı. Hep var gibi oldu.)


var result="Hallo"

if(number2==100){
    
    let result = "Hi!" //!Block-scope
    console.log(result);

    // var result = "whatsup"
} else{
    result="Salut" //global-scope
    console.log(result);
}

console.log(result);



const arg=()=>{
    console.log(arguments);
}

// arg(34,55,78,89,12,345,67) // arrow desteklemedi.

//!arrow function da arguments desteklenmediği için, tüm fonksiyonlarda geçerli (bu konuyu sonra göreceğiz) ... yani rest operatörü kullanabiliriz

const arg3=(...a)=> {
    console.log(a); // [34,55,78,89,12,345,67]
}

arg3(34,55,78,89,12,345,67)
arg3("merhaba", "hi" , "hallo")

