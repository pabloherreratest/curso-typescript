let frutas:string[] = ["Manzana", "Pera", "Naranja"];

console.log(frutas[0]); // Salida: "Manzana" (el primer elemento)
console.log(frutas[1]); // Salida: "Pera" (el segundo elemento)
console.log(frutas[2]); // Salida: "Naranja" (el tercer elemento)

//let calificaciones: number[] = [10, 8, 9,7];
let calificaciones: Array<number> = [10, 8, 9,7];

calificaciones.forEach(calificacion => {
    console.log(calificacion);
});

/*
console.log(calificaciones[0]); 
console.log(calificaciones[1]); 
console.log(calificaciones[2]); 
console.log(calificaciones[3]); 
*/