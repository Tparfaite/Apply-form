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
    if(fname.value && lname.value && email.value && password.value) {
    congs.textContent=`Congratulation ${fname.value} ${lname.value}!!! Your application is successfully received .`;

    }
    else {
        congs.textContent=`please fill out all the required spaces`;
        function me(){
            setTimeout(()=>{
                congs.style.transform="translateY(-250%)";
    congs.textContent=`Kindly! Refresh in order to get form to apply again!`
            },3000);
           
        }
        me()
    }
    form.style.transform="translateX(350%)";
    console.log(fname.value+" "+lname.value+" "+email.value+" "+password.value);
})