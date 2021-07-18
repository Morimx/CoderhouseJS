//Funcion Mostrar contraseña
function showPassword() {
    var password = document.getElementById('pwd');
    if (password.type === 'password') {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Funcion para logueo de usuario
function login(correo, password) {

    let mail = correo || $('.emaillgin').val();
    let passwd = password || $('.passwdlgin').val();

    const passwdUsuario = localStorage.getItem(mail)

    if (passwdUsuario == passwd) {
        window.open("./mainpage.html", "_self")
        return;
    } else {
        alert("Usuario o contraseña incorrecto")
    }

}