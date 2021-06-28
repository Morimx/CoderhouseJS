// Definicion de variables //
const iva = 1.21;
let resultadofinal = 0;
const pantalla = document.querySelector('.numero');
const cantCuotas = document.querySelector('.cantCuotas');
const mostrarCarrito1 = document.querySelector('.carritos');
let carrito = [];
const registrados = [];

// Funciones de precios //
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
    /////


function preciocompleto(articulo) {
    if (precios[articulo]) {
        resultadofinal += precios[articulo] * iva;
        pantalla.innerHTML = resultadofinal;
        let newItem = {};
        newItem[articulo] = precios[articulo] * iva
        carrito.push(newItem)
        return alert(`Costo iva incluido: ${precios[articulo]*iva}$`);
    }
    return alert(`el precio ${articulo} no existe`);
}

function mostrarCuotas(cantidadCuotas) {
    if (cuotas[cantidadCuotas]) {
        cantCuotas.innerHTML = resultadofinal / cuotas[cantidadCuotas];
        return;
    }
    return alert(`La cantidad de cuotas ${cantidadCuotas} no esta disponible`);
}

//reinicios de displays //
function reiniciaracero() {
    resultadofinal = 0;
    cantCuotas.innerHTML = 0;
    pantalla.innerHTML = resultadofinal
    carrito = [];
    return;
}

function Registro() {
    const usuarios = {};
    usuarios.nombre = prompt("Ingrese Nombre");
    usuarios.email = prompt("Ingrese su Mail");
    registrar(usuarios);
};

function registrar(nuevoUsuario) {
    if (nuevoUsuario.nombre == "" || nuevoUsuario.email == "") {
        return alert("Faltan Datos, por favor presione 'Comenzar'");
    }
    registrados.push(nuevoUsuario);
};