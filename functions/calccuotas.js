//Funcion para display de cuotas
function mostrarCuotas(cantidadCuotas) {
    if (cuotas[cantidadCuotas]) {
        cantCuotas.innerHTML = resultadofinal / cuotas[cantidadCuotas];
        return;
    }
    return alert(`La cantidad de cuotas ${cantidadCuotas} no esta disponible`);
}