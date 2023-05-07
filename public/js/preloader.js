// Simulación de carga de página
setTimeout(function () {
  // Ocultar el preloader y mostrar el contenido principal
  document.querySelector(".preloader").style.display = "none";
  document.body.style.overflow = "auto";
}, 3000);
