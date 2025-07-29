/* Tenemos un objeto persona que tiene las propiedades
- ID, que es numérico, no es modificable
- Nombre, que es string
- email, que es string y es opcional
- esAdmin, que es boolean                                */

type Persona = {
    readonly id:number,
    nombre:string,
    email?: string,
    esAdmin: boolean
}

const persona1:Persona = {
    id:1,
    nombre:"Pablo",
    email: "pablo.herrera@test.com",
    esAdmin: false
}

const persona2:Persona = {
    id:2,
    nombre:"juan",    
    esAdmin: true
}

persona2.nombre = "Pedro"


console.table(persona1);
console.table(persona2);