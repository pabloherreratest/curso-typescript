/*
Interface

Define la forma de un objeto. 
Es ideal para describir objetos, 
clases y funciones. 
Piénsalo como un contrato de cómo debe lucir un objeto.	
*/

interface ProductoComercial{
    nombre:string,
    precio:number,
    stock:boolean,
    color?:string
}

const miProducto: ProductoComercial = {
    nombre:"computador",
    precio:1000,
    stock:true,
    color:"gris"
}