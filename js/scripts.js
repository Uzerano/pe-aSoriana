/*  MENSAJE DE POLITICA DE PRIVACIDAD */

function fueraPolitica() {
    const privacidad = document.querySelector('#politica');
    if (privacidad.style.display === "none") {
        privacidad.style.display = "block";
    } else {
        privacidad.style.display = "none";
    }
}


/* VALIDAR FORMULARIO */

/*let nombre = document.querySelector('#nombre');
let email  = document.querySelector('#email');
let error  = document.querySelector('#error');
error.style.color = 'red';

function validarFormulario(){
    const mensajeError = [];
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const valido = expReg.test(email);
    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Escribe tu nombre');
    }
    if(valido === false){
        mensajeError.push('Email no valido');
    }

    error.innerHTML = mensajeError.join(',');
    return false;
}*/

/* MENU HAMBURGUESA LATERAL FALLIDO */

/*const iconoMenu = document.querySelector('#boton__menu'),
       menu = document.querySelector('#nav');


iconoMenu.addEventListener('click', (e) => {
    //Alternamos estilos para el menu y body
        menu.classList.toggle('active');
});*/

/* VERIFICAR EL CAMPO NOMBRE DEL FORMULARIO */

/*let error_nombre = document.querySelector('#error__nombre');
error_nombre.style.color = 'red';

function validarNombre(nombre) {
    const usuario = document.querySelector('#nombre');
    const mensajeError = [];
    if (usuario.value === null || usuario.value === '') {
        mensajeError.push('Escribe un nombre correcto');
    }
    error_nombre.innerHTML = mensajeError.join();
}*/


/* VERIFICAR SI ES CORRECTO EL EMAIL */



let error = document.querySelector('#error');
error.style.color = 'red';


    
    function validarEmail(email) {
        const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const valido = expReg.test(email);
         const mensajeError = [];
    
        if (valido ==! true) {
            mensajeError.push('Email no válido');
            
        } 
        error.innerHTML = mensajeError.join();
    }





