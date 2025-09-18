// Especificar las propiedades del response
// Contrato

interface ProductoAPI{
    id: number,
    title: string,
    slug: string,
    price: number,
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
        slug?:string
    };
    images: string[];
    creationAt: string;
    updatedAt: string;
}


// La función asíncrona obtiene los datos del producto
async function obtenerProducto(idProducto: number):Promise<ProductoAPI> {
  const url = `https://api.escuelajs.co/api/v1/products/${idProducto}`;
  const response = await fetch(url);
  const data:ProductoAPI = await response.json();
  return data; // Retorna el objeto del producto
}

// La función que se supone que debe obtener el título del producto
async function obtenerTitulo(idProducto: number): Promise<string> {
  const producto = await obtenerProducto(idProducto);
  return producto.title;
}

// La función para probar el código
async function test(idProducto: number) {
  const tituloProducto = await obtenerTitulo(idProducto);
  console.log("El título del producto es:",  tituloProducto);
}

// El resultado al ejecutar este código:
test(117);