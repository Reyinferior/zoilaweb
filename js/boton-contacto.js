document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector("#boton-cotizar");

    if(boton) {
        boton.addEventListener("click", () => {
    location.href = "/paginas/contacto.html";
    });

    }

});