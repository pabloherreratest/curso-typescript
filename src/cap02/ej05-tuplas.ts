// Imagina que tenemos la respuesta de un API
// que me devuelve el código de la  numérico (status)
// y el mensaje de la respuesta (message)
// la tupla sería [status,message]
// los tipos de datos de la tupla serían: [number,string]
let respuesta: [number,string]
respuesta = [200,"Exitoso"];

console.log("status = ",respuesta[0]);
console.log("message = ",respuesta[1]);

// [id:number,pass: string, estado:boolean]
let usuario: [number,string,boolean]

usuario = [123,"miClave.01",true];

console.log("ID = ",usuario[0]);
console.log("Password = ",usuario[1]);
console.log("estado = ",usuario[2]);