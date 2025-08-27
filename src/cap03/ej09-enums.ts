// Definición del Enum
// Un Enum (enumeración) es un conjunto de constantes nombradas.
// Por defecto, los valores numéricos comienzan desde 0 y se incrementan en 1.

enum EstadoPedido{
    Inicial,
    EnProceso,
    Enviando,
    Recibido
}

let estado: EstadoPedido;

estado = EstadoPedido.Enviando;

console.log("Estado Pedido =", estado);


enum EstadoCompra{
    Inicial = "I",
    Facturado = "F",
    Devuelto = "D"
}

let estadoC: EstadoCompra;

estadoC = EstadoCompra.Devuelto;

console.log("Estado Compra =", estadoC);

enum CodigoError{
    Ok = 100,
    ErrorRed = 200,
    ErrorBDD = 300
}

let codigoE: CodigoError;

codigoE = CodigoError.ErrorRed;

console.log("Codigo Error =", codigoE);