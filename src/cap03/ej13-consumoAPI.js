// La función asíncrona obtiene los datos del producto
async function obtenerProducto(idProducto) {
  const url = `https://api.escuelajs.co/api/v1/products/${idProducto}`;
  const response = await fetch(url);
  const data = await response.json();
  return data; // Retorna el objeto del producto
}

// La función que se supone que debe obtener el título del producto
async function obtenerTitulo(idProducto) {
  const producto = await obtenerProducto(idProducto);
  return producto.title;
}

// La función para probar el código
async function test(idProducto) {
  const tituloProducto = await obtenerTitulo(idProducto);
  console.log("El título del producto es:",  tituloProducto);
}

// El resultado al ejecutar este código:
test(118);