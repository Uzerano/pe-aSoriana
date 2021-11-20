



 function fueraPolitica() {
    const privacidad = document.querySelector('#politica');
    if(privacidad.style.display === "none") {
        privacidad.style.display = "block";
    } else {
        privacidad.style.display = "none";
    }
}



const iconoMenu = document.querySelector('#boton__menu'),
       menu = document.querySelector('#nav');


iconoMenu.addEventListener('click', (e) => {
    //Alternamos estilos para el menu y body
        menu.classList.toggle('active');
     
      

});