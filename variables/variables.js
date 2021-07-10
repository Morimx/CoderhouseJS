// Variables //
const iva = 1.21;
let resultadofinal = 0;
const pantalla = document.querySelector('.numero');
const cantCuotas = document.querySelector('.cantCuotas');
const mostrarCarrito1 = document.querySelector('.carrito');
let carrito = [];
let registrados = [];
const loginlogout = document.querySelector('.loginbtn');


// Lista de cuotas //
let cuotas = {
    trescuotas: 3,
    seiscuotas: 6,
    docecuotas: 12,
}

//Lista de servicios//
let servicios = [{
    nombre: "Formateo",
    precio: 2000,
    descripcion: "",
}, {
    nombre: "Backup Cloud",
    precio: 5000,
    descripcion: "",
}, {
    nombre: "Instalacion de Software",
    precio: 1000,
    descripcion: "kakl asdas",
}, ]