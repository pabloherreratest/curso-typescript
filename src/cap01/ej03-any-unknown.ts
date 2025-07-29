let apellido1:any
apellido1="Herrera"
//apellido1 = 10
console.log("Apellido = ",apellido1.toUpperCase())
console.log("Longitud apellido = ",apellido1.length)


let apellido2:unknown
apellido2="Herrera"
//apellido2 = 10
if(typeof apellido2 === "string")
{
console.log("Apellido = ",apellido2.toUpperCase())
console.log("Longitud apellido = ",apellido2.length)
}
