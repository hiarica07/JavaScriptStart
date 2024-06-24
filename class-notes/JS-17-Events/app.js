let buton1 = document.getElementById("myButton")
let sonuc = document.getElementById("result")

// console.log(buton1);
// console.log(result);

//! Callback yazım çeşitleri

//? 1.yol

// buton1.addEventListener("click",function konsol(){

// console.log("buton1 clicked");

// })

//? 2.yol

// buton1.addEventListener("click",function(){

//     console.log("buton1 clicked");

//     sonuc.innerText += "\n Button 1 clicked"

    
//     })

//? 3.Yol dışarıdan arrow / expression fonksiyon çağırma

// const clicked2 = () => {
//     sonuc.textContent +="Button 1 clicked"
// }

// buton1.addEventListener("click",clicked2)


//? 4. yol dışarıdan

// function clicked (){

//     sonuc.textContent +="\n Button 1 clicked function called from outside"

// }

// buton1.addEventListener("click",clicked)


//? mouseover - mouseout

// let myImg = document.getElementById("myImage")

// myImg.addEventListener("mouseover",()=>{

//     myImg.style.width = "201px";
//     // console.log("image 300px oldu");

// })

// myImg.addEventListener("mouseout",()=>{
//     myImg.style.width = "200px";
//     // myImg.style.display = "none";
//     // console.log("image 200px oldu");
// })

// buton1.addEventListener("click",()=>{
//     myImg.style.display="block"
// })

//? drop down menu

let secim = document.getElementById("colors")

secim.addEventListener("change", ()=>{
    let selectedColor = secim.value
    // console.log(selectedColor);// değişken rengi yakaladık.
    document.getElementById("selectedColorP").textContent = `Seçilen renk: ${selectedColor} `

    document.body.style.backgroundColor = selectedColor
})

//? Random background color.

//random renk
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


const buton2 = document.getElementById("colorButton")

const colors = [];
const colorL = document.getElementById("colorList")

buton2.addEventListener("click",()=>{

    const renk= getRandomColor()
    const colorObject = {color: renk}
    colors.push(colorObject)
    console.log(colors);
    document.body.style.backgroundColor= renk

    //yeni rengi ekrana listeleme.

    const listItem = document.createElement("li")
    listItem.style.backgroundColor = renk;
    listItem.textContent= renk
    listItem.addEventListener("click",()=>{
        document.body.style.backgroundColor = renk;
    })


    colorL.appendChild(listItem)
    // colorL.prepend(listItem) // üste ekler.

})

//! Telefon örneği

// let resim = document.querySelector(".resim")
// let ses1 = document.querySelector(".ses1")
// let ses2 = document.querySelector(".ses2")
// let ara = document.querySelector(".ara")
// let baglat = document.querySelector(".baglat")
// let konus = document.querySelector(".konus")
// let kapat = document.querySelector(".kapat")

// ara.addEventListener("click",()=>{
//     ses2.play();
//     ses2.volume = 0.1;
// })

// baglat.addEventListener("click",()=>{
//     ses2.pause();
//     ses1.play()
//     ses1.volume=0.1;
//     resim.src ="./helpers/connect.jpg"
// })

// konus.addEventListener("click", ()=>{
//     ses1.pause();
//     resim.src = "./helpers/call.jpg"
// })

// kapat.addEventListener("click",()=>{
//     ses1.pause();
//     ses2.pause();
//     resim.src="./helpers/images.jpg"
// })

//! Input örneği

// let alan = document.getElementById("username")
// let buton3 = document.getElementById("login")
// let user = document.getElementById("displayUsername")

// // alan.addEventListener("input", ()=>{
// //     let username = alan.value
// //     user.textContent = `Girdiğiniz kullanıcı adı : ${username}`
// // })



// let usr = "Halil"

// buton3.addEventListener("click",()=>{
//     let username = alan.value
//     if (username == usr) {
//         user.textContent = `Girdiğiniz kullanıcı adı : ${username}, Giriş başarılı`
//         alan.value=''
//     } else {
//         user.textContent = `Girdiğiniz kullanıcı adı hatalıdır`
//     }
    
    
// })

const numbers = document.querySelectorAll('.number')
console.log(numbers);