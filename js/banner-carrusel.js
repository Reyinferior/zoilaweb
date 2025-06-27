let indiceSlide = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function moverSlide(n) {
    indiceSlide += n;
    if (indiceSlide >= slides.length) indiceSlide = 0;
    if (indiceSlide < 0) indiceSlide = slides.length - 1;
    mostrarSlide(indiceSlide);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarSlide(indiceSlide);

  // 👉 FLECHAS MANUALES
    const btnPrev = document.querySelector(".prev");
    const btnNext = document.querySelector(".next");

    if (btnPrev && btnNext) {
    btnPrev.addEventListener("click", () => moverSlide(-1));
    btnNext.addEventListener("click", () => moverSlide(1));
    }

  // 🕐 Auto deslizamiento
    setInterval(() => {
    moverSlide(1);
    }, 5000);
});




