// Muestra el botón arriba cuando se baja 20px desde la cima del documento
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.volver-arriba').style.display = "block";
    } else {
        document.querySelector('.volver-arriba').style.display = "none";
    }
};

// vuelve al inicio del documento cuando se hace click en el botón
document.querySelector('.volver-arriba').onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
