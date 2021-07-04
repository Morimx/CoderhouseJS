function preciocompleto2(articulo) {
    servicios.forEach(x => {
        if (articulo == x.nombre) {
            resultadofinal += x.precio * iva;
            pantalla.innerHTML = resultadofinal;
            carrito.push(x);
            alert(`Costo iva incluido: ${x.precio*iva}$`);
        }
    })
    var carritoitems = '';
    carrito.forEach(c => {
        let citemnombre = c.nombre;
        let citemprecio = c.precio;
        carritoitems += `<li>${citemnombre}: ${citemprecio}</li>`
        mostrarCarrito1.innerHTML = carritoitems
    })
}



/*function preciocompleto(articulo) {
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
}*/


/*function preciocompleto2(articulo) {
    for (x = 0; x < servicios.length; x++) {
        if (articulo == servicios[x].nombre) {
            resultadofinal += servicios[x].precio * iva;
            pantalla.innerHTML = resultadofinal;
            carrito.push(servicios[x]);
            alert(`Costo iva incluido: ${servicios[x].precio*iva}$`);
        }
    }
    var carritoitems = "";
    for (c = 0; c < carrito.length; c++) {
        let citemnombre = carrito[c].nombre;
        let citemprecio = carrito[c].precio;
        carritoitems += `${citemnombre}: ${citemprecio} - `
        mostrarCarrito1.innerHTML = carritoitems
    }
}*/