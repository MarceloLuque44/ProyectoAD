function mostrarSeccion(idSeccion) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    document.getElementById(idSeccion).style.display = 'block';
}

function mostrarSubseccion(idSubseccion) {
    const subsecciones = document.querySelectorAll('.subseccion');
    subsecciones.forEach(subseccion => {
        subseccion.style.display = 'none';
    });
    document.getElementById(idSubseccion).style.display = 'block';
}