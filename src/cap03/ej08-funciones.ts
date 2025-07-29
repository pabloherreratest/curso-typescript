// Funciones

function sumar(a:number, b:number):number {
  return a + b;
}

let resultadoSuma: number = sumar(5, 3);
console.log(resultadoSuma); // Salida: 8

// Si intentamos pasar un tipo de dato incorrecto, TypeScript nos alertará:
// sumar("hola", 3); // Error de TypeScript: Argument of type 'string' is not assignable to parameter of type 'number'.

// Función que no retorna un valor /

function saludar(nombre: string): void {
  console.log(`Hola, ${nombre}`);
}

saludar("Ana"); // Salida: Hola, Ana
// let saludo: string = saludar("Pedro"); // Error de TypeScript: Type 'void' is not assignable to type 'string'.

// Función con parámetros opcionales

function saludarConApellido(nombre: string, apellido?: string): string {
  if (apellido) {
    return `Hola, ${nombre} ${apellido}`;
  } else {
    return `Hola, ${nombre}`;
  }
}

console.log(saludarConApellido("Juan"));         // Salida: Hola, Juan
console.log(saludarConApellido("Maria", "Pérez")); // Salida: Hola, Maria Pérez

// Función con valores por defecto

function saludarConCiudad(nombre: string, ciudad: string = "Desconocida"): string {
  return `Hola, ${nombre} vives en ${ciudad}`;
}

console.log(saludarConCiudad("Carlos"));             // Salida: Hola, Carlos vives en Desconocida
console.log(saludarConCiudad("Laura", "Barcelona")); // Salida: Hola, Laura vives en Barcelona


function imprimirSaludo(nombre: string, ciudad: string = "Desconocida"): void {
   console.log(`Hola, ${nombre} vives en ${ciudad}`);
}

imprimirSaludo("Pablo", "Quito")