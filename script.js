const contenidos = {
    l10n: [
        { imagen: "Imagenes/juegodemesa.png", texto: "Juego de mesa (divisa, calles, etc.)"},
        { imagen: "Imagenes/cocheinterior.png", texto: "Interior de un coche (cuadro de mandos, pantalla, etc.)"},
        { imagen: "Imagenes/videojuegoscaratulas.jpg", texto: "Videojuegos (carátulas, menús, etc.)"},
        { imagen: "Imagenes/audiovisual.png", texto: "Películas (subtítulos, doblaje, etc.)"},
    ],
    trad: [
        { imagen: "Imagenes/manual.jpg", texto: "Manual de instrucciones"},
        { imagen: "Imagenes/obrasliterarias.jpg", texto: "Obras literarias"},
        { imagen: "Imagenes/revistacient.jpg", texto: "Artículos científicos"},
        { imagen: "Imagenes/documentolegal.jpg", texto: "Documentos legales"},
    ]
};

function togglePannel (tipo, numero, boton) {
    const panel = document.getElementById(`recuadro-${tipo}`);
    const texto = document.getElementById(`texto-${tipo}`);
    const imagen = document.getElementById(`imagen-${tipo}`);
    const botones = boton.parentElement.querySelectorAll('ejemplo-L10nTrad');

    const yaAbierto = panel.classList.contains ('visible') && 
                      boton.classList.contains('activo');
    
    botones.forEach(btn => btn.classList.remove('activo'));
    panel.classList.remove('visible');

    if (!yaAbierto) {
        texto.textContent = contenidos[tipo][numero - 1].texto;
        imagen.src = contenidos[tipo][numero - 1].imagen;
        boton.classList.add('activo'); 
        panel.classList.add('visible');
    }
}

function abrirModal(src) {
    document.getElementById('modal-img').src = src;
    document.getElementById('modal').classList.add('activo');
}

function cerrarModal() {
    document.getElementById('modal').classList.remove('activo');
}