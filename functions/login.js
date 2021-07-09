function showPassword() {
    var password = document.getElementById('pwd');
    if (password.type === 'password') {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function login(correo, password) {

    let mail = correo || document.querySelector('.emaillgin').value;
    let passwd = password || document.querySelector('.passwdlgin').value;

    const passwdUsuario = localStorage.getItem(mail)

    if (passwdUsuario == passwd) {
        window.open("./index.html", "_self")
        return;
    }
    alert("Usuario o contraseña incorrecto")

}