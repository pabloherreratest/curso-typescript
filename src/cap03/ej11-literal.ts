/*
¿Qué son los Tipos Literales?
En TypeScript, un tipo literal es un tipo que solo acepta un valor específico. 
En otras palabras, no se limita a tipos genéricos como string o number, 
sino a valores exactos. Son muy útiles para definir un conjunto fijo y 
limitado de valores, lo que mejora la seguridad y la legibilidad del código. 
Imagina que en lugar de decir "esto es una cadena de texto," dices 
"esto es exactamente la cadena de texto 'rojo'."
*/

let talla: string
talla = 'ddsfadsfa fads'

type TallaCamisa = 'small' | 'medium' | 'large'

let miTalla1:TallaCamisa = 'small'
miTalla1 = 'medium'
// miTalla1 = 'extraLarge' // da error

type Calificacion = 1 | 2 | 3 | 4 | 5

let miCalificacion: Calificacion
miCalificacion = 2
// miCalificacion = 8 // da error

