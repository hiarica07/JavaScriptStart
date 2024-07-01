


const getCountry=async()=>{

 const res= await fetch("https://restcountries.com/v3.1/all")
const data= await  res.json()

// console.log(data);
printScreen(data)

}
getCountry()



const printScreen=(countries)=>{
const devletlerDiv= document.querySelector("article")

countries.forEach((a)=>{
    console.log(a);  // ÇOK ÖNEMLİ BURASI 
devletlerDiv.innerHTML+=`
<div class="card text-start w-50 shadow-lg bg-light my-4" style="width: 18rem;">
  <img src="${a.flags.svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${a.name.common} </h5>
    
<ul class="list-group list-group-flush">
  <li class="list-group-item">
  
  <i class="fas fa-lg fa-landmark"></i>${a.capital} </li>
  <li class="list-group-item">
  <i class="fas fa-lg fa-comments"></i> ${Object.values(a.languages).join(', ')}
</li>

  <li class="list-group-item"> <i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(a.currencies)[0].name} </li>
  
</ul>
 </div>
</div> 

`



})




}

