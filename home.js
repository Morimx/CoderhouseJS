/*
//Ciclos e iteraciones

// Variables de ingreso
var ingProducto = parseInt(prompt("Ingrese el numero del producto deseado\n 1) Coca cola \n 2) Pepsi \n 3) Seven-up \n 4) Cancelar"))
var StockCocacola = 10
var StockPepsi = 10
var StockSevenup = 10

// Ciclo while + Switch
while(ingProducto != "4"){
   switch (ingProducto) {
       case 1:
           if(StockCocacola > 0){
            StockCocacola -= 1;
            alert(`Seleccionaste coca cola, nos quedan ${StockCocacola} en stock`);}
            else{
                alert("No tenemos mas stock de este producto")
              }
              break;
        case 2:
            if(StockPepsi > 0){
                StockPepsi -= 1;
                alert(`Seleccionaste Pepsi, nos quedan ${StockPepsi} en stock`);}
                else{
                    alert("No tenemos mas stock de este producto")
                  }
                  break;
        case 3:
            if(StockSevenup > 0){
                StockSevenup -= 1;
                alert(`Seleccionaste Seven-up, nos quedan ${StockSevenup} en stock`);}
                else{
                    alert("No tenemos mas stock de este producto")
                  }
                  break;
       default:
        alert(`Selecciona un producto o seleecione 4 para salir`);   
        break;
   }
   ingProducto = parseInt(prompt("Ingrese el numero del producto deseado\n 1) Coca cola \n 2) Pepsi \n 3) Seven-up \n 4) Cancelar"))
}

// Datos para el desarrollador
console.log("Quedan actualmente en stock:")
console.log(`Coca colas: ${StockCocacola}`)
console.log(`Pepsis ${StockPepsi}`)
console.log(`Seven-ups ${StockSevenup}`)

*/

// OPERACIONES +-/* //
/* 
const Ingresodenumero1 = 0
const Ingresodenumero2 = 0
const Resultado = 0

function Productos(Ingresodenumero1, Ingresodenumero2){
    prompt("Seleccionoa el producto deseado: 1) Coca Cola 5$ \n 2) Pepsi 7$")
  return alert(resultado);
  }
  
  
  function suma(Ingresodenumero1, Ingresodenumero2){
      Ingresodenumero1 = parseInt(prompt("Ingresa un numero"));
      Ingresodenumero2 = parseInt(prompt("Ingresa un numero"));
      resultado = Ingresodenumero1+Ingresodenumero2
  return alert(resultado);
  }
  
  function resta(Ingresodenumero1, Ingresodenumero2){
      Ingresodenumero1 = parseInt(prompt("Ingresa un numero"));
      Ingresodenumero2 = parseInt(prompt("Ingresa un numero"));
      resultado = Ingresodenumero1-Ingresodenumero2
  return alert(resultado);
  }
  
  function dividir(Ingresodenumero1, Ingresodenumero2){
      Ingresodenumero1 = parseInt(prompt("Ingresa un numero"));
      Ingresodenumero2 = parseInt(prompt("Ingresa un numero"));
      resultado = Ingresodenumero1/Ingresodenumero2
  return alert(resultado);
  }
  
  function multiplicar(Ingresodenumero1, Ingresodenumero2){
      Ingresodenumero1 = parseInt(prompt("Ingresa un numero"));
      Ingresodenumero2 = parseInt(prompt("Ingresa un numero"));
      resultado = Ingresodenumero1*Ingresodenumero2
  return alert(resultado);
  }*/




const iva = 1.21;
let preciobkp = 5000;
let precioformateo = 2000;
let preciosoft = 1000;
let precio = 8000;
let resultadofinal = 0;
const pantalla = document.querySelector('.numero');
const trescuota = document.querySelector('.trescuota');
const seiscuota = document.querySelector('.seiscuota')
const docecuota = document.querySelector('.docecuota')

function FormateodePC(){
    resultadofinal += precioformateo*iva;
    pantalla.innerHTML = resultadofinal
return alert(`Elegiste formateo el costo final es de: ${precioformateo*iva}$`);
}

function backup(backup){
    resultadofinal += preciobkp*iva;
    pantalla.innerHTML = resultadofinal
    return alert(`Elegiste Backup en la nube el costo final es de: ${preciobkp*iva}$`);
}
function InstalacionSoft(){
    resultadofinal += preciosoft*iva;
    pantalla.innerHTML = resultadofinal
return alert(`Elegiste instalacion de soft el costo final es de: ${preciosoft*iva}$`);
}

function trescuotas(){
    trescuota.innerHTML = resultadofinal/3;
}

function seiscuotas(){
    seiscuota.innerHTML = resultadofinal/6;
}

function docecuotas(){
    docecuota.innerHTML = resultadofinal/12;
}

function reiniciaracero(){
    resultadofinal = 0;
    docecuota.innerHTML = 0;
    seiscuota.innerHTML = 0;
    trescuota.innerHTML = 0;
    pantalla.innerHTML = resultadofinal
    return;
}