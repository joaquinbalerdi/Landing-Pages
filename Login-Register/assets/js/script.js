document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);

window.addEventListener("resize", anchoPagina);


//Declaración de variables
let contenedor_login_register = document.querySelector(".contenedor__login-register");
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let caja_posterior_login = document.querySelector(".caja__posterior-login");
let caja_posterior_register = document.querySelector(".caja__posterior-register");

function anchoPagina() {
    if(window.innerWidth > 850) {
        caja_posterior_login.style.display = "block";
        caja_posterior_register.style.display = "block";
    }else{
        caja_posterior_register.style.display = "block";
        caja_posterior_register.style.opacity = "1";
        caja_posterior_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();


function iniciarSesion() {

    if(window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display ="block";
        caja_posterior_register.style.opacity = "1";
        caja_posterior_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display ="block";
        caja_posterior_register.style.display = "block";
        caja_posterior_login.style.display = "none";
    }
}

function register() {
    if(window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display ="none";
        caja_posterior_register.style.opacity = "0";
        caja_posterior_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display ="none";
        caja_posterior_register.style.display = "none";
        caja_posterior_login.style.display = "block";
        caja_posterior_login.style.opacity = "1";
    }
}