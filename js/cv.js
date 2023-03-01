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

// Muestra un texto cuando se pasa el mouse sobre cada uno de los íconos de la barra
const icons = document.querySelectorAll('.icon-bar i');
const textElement = document.getElementById('icon-text');

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        const text = icon.getAttribute('data-text');
        textElement.textContent = text;
    });

    icon.addEventListener('mouseout', () => {
        textElement.textContent = '';
    });
});
