// Selecciona los elementos del DOM
const precioInicial = document.querySelector(".precio-inicial");
const cantidad = document.querySelector(".cantidad");
const total = document.querySelector(".valor-total");
const btnSumar = document.querySelector("#btnSumar");
const btnRestar = document.querySelector("#btnRestar");

// Se asigna un precio base al producto
let valorProducto = 400000;
let cantidadProductos = 0;

// Muestra precio base al cargar
precioInicial.innerHTML = valorProducto;

// Muestra valor total inicial
document.querySelector(".valor-total").innerHTML = 800000;

// Función para actualizar cantidad y total
function actualizarPantalla() {
  cantidad.innerHTML = cantidadProductos;
  total.innerHTML = valorProducto * cantidadProductos;
}

// Botón "+"
btnSumar.onclick = function() {
  cantidadProductos++;
  actualizarPantalla();
};

// Botón "-"
btnRestar.onclick = function() {
  if (cantidadProductos > 0) {
    cantidadProductos--;
    actualizarPantalla();
  }
};