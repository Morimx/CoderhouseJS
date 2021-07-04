const iva = 1.21;
let resultadofinal = 0;
const pantalla = document.querySelector('.numero');
const cantCuotas = document.querySelector('.cantCuotas');
const mostrarCarrito1 = document.querySelector('.carrito');
let carrito = [];
const registrados = [];


let cuotas = {
    trescuotas: 3,
    seiscuotas: 6,
    docecuotas: 12,
}

let precios = {
    precioformateo: 2000,
    preciobkp: 5000,
    preciosoft: 1000,
}