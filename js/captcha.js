

var arr= "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
var captcha= "";
var btn = document.getElementById("botonCaptcha");

numran()
function numran(){
for(let i=0;i<4;i++){
     let numeroRandom= Math.floor(Math.random()*(37-0));
    captcha += arr[numeroRandom];
}}

btn.addEventListener("click", function(){
    let valorCaptcha = document.getElementById("valorCaptcha").value;
    if ((valorCaptcha != captcha) ){
        document.getElementById("resultado").innerHTML = "El captcha fue erroneo "
    }
        else{
        document.getElementById("resultado").innerHTML = "Tu datos ya fueron enviados "  
        }
        document.getElementById("fname").value=''
        document.getElementById("lname").value=''
        document.getElementById("bday").value=''
        document.getElementById("email").value=''
        document.getElementById("valorCaptcha").value=''
        
    });

document.getElementById("captcha").innerHTML += captcha;

console.log("");
document.querySelector(".btn-menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".ul-nav").classList.toggle("show");
}

