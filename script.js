function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');

  secciones.forEach(sec => {
    sec.classList.remove('activa');
  });

  const actual = document.getElementById(id);
  actual.classList.add('activa');
}

// Inicializar con sección "Sobre mí"
window.onload = function () {
  mostrarSeccion('about');

 
};
