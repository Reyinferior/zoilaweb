document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".boton-contacto");

    if(boton) {
        boton.addEventListener("click", () => {
    location.href = "/paginas/contacto.html";
    });

    }

});