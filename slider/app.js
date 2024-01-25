
// Obtener referencias a los elementos de entrada y texto por su id
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Inicializar las variables rojo, verde y azul con los valores iniciales de los campos de entrada
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Asignar los valores iniciales de los campos de entrada a los campos de texto
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

// Función para actualizar el color de fondo del cuerpo del documento
function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  //actualiza el color del background(fondo del documento)
  document.body.style.backgroundColor = colorRGB;
}

// Escuchar cambios en el campo de entrada rojo
inputRojo.addEventListener("change", (e) => {
  // Actualizar el valor de la variable rojo y el texto correspondiente
  rojo = e.target.value;
  textoRojo.textContent = rojo;
  // Llamar a la función para actualizar el color de fondo
  actualizarColor(rojo, verde, azul);
});

// Escuchar cambios en el campo de entrada verde
inputVerde.addEventListener("change", (e) => {
  // Actualizar el valor de la variable verde y el texto correspondiente
  verde = e.target.value;
  textoVerde.textContent = verde;
  // Llamar a la función para actualizar el color de fondo
  actualizarColor(rojo, verde, azul);
});

// Escuchar cambios en el campo de entrada azul
inputAzul.addEventListener("change", (e) => {
  // Actualizar el valor de la variable azul y el texto correspondiente
  azul = e.target.value;
  textoAzul.textContent = azul;
  // Llamar a la función para actualizar el color de fondo
  actualizarColor(rojo, verde, azul);
});


