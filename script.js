const textos = [
    "¡Hola, mundo!",
    "Aprender a programar es divertido.",
    "¡Sigue adelante con tu aprendizaje!"
];

let indiceActual = 0;

function cambiarTexto() {
    const textoCarrusel = document.getElementById("textoCarrusel");
    textoCarrusel.textContent = textos[indiceActual];
    indiceActual = (indiceActual + 1) % textos.length;
}

cambiarTexto();
setInterval(cambiarTexto, 2000);
