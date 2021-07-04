function preciocompleto(articulo) {
    if (precios[articulo]) {
        resultadofinal += precios[articulo] * iva;
        pantalla.innerHTML = resultadofinal;
        let newItem = {};
        newItem[articulo] = precios[articulo] * iva
        carrito.push(newItem)
        mostrarCarrito1.innerHTML = JSON.stringify(carrito)
        return alert(`Costo iva incluido: ${precios[articulo]*iva}$`);
    }
    return alert(`el precio ${articulo} no existe`);
}