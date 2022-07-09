let container=document.querySelector(".container");
console.log(container);
let button=document.getElementById("button1");

let form=document.querySelector(".form");
let input=document.querySelectorAll("input");

let fname=input[0];
let lname=input[1];
let email=input[2];
let password=input[3];

let education=document.getElementById("education");
let photo=document.getElementById("photo");
let submit=document.getElementById("submit");
let congs=document.getElementById("congs");


button.addEventListener("click",e=>{
    form.classList.toggle("apply");
    
})

submit.addEventListener("click",e=>{
    congs.classList.toggle("submitted");
    congs.textContent=`Congratulation ${fname.value} ${lname.value}!!! Your application is successfully received .`;
    form.style.transform="translateX(250%)";
    console.log(fname.value+" "+lname.value+" "+email.value+" "+password.value);
})
