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
    alert("La password sera enviada por correo electronico")
};