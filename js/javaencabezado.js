// Cargar header y footer dinámicamente
document.addEventListener("DOMContentLoaded", () => {
    const rutaBase = location.pathname.includes("/paginas/") ? "../" : "";
    
    includeHTML(rutaBase + "encabezado-piecera/header.html", "header-container");
    includeHTML(rutaBase + "encabezado-piecera/footer.html", "footer-container");
    
});

function includeHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar " + file);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}
