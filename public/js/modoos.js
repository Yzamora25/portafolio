// Obtener el interruptor
const switchElement = document.getElementById("switch");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

// Verificar el estado actual del interruptor
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Establecer el estado inicial del interruptor
switchElement.checked = isDarkMode;
updateIcon();

// Función para cambiar el tema
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Guardar el estado del tema en el almacenamiento local
  const darkModeEnabled = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", darkModeEnabled);

  updateIcon();
}

// Función para actualizar el icono según el estado del interruptor
function updateIcon() {
  if (switchElement.checked) {
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
  } else {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  }
}

// Agregar un controlador de eventos al interruptor
switchElement.addEventListener("change", toggleDarkMode);
