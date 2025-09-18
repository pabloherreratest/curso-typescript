/* 
Aserciones de Tipo

Las aserciones de tipo en TypeScript son una forma de 
indicarle al compilador que tú conoces mejor el tipo 
de una variable de lo que él podría inferir.
*/

let mensaje: unknown

mensaje = "HOla mundO"

let resultado = (<string>mensaje).toUpperCase();

console.log("resultado = ",resultado)

