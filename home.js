var ingreseprimernumero = parseInt(prompt("Ingrese un numero entero"));
var ingresesegundonumero = parseInt(prompt("Ingrese el segundo numero entero"));
var suma = ingreseprimernumero + ingresesegundonumero;

if (suma > 10){
alert("Tu numero es mayor a 10!");
}else if(suma === 10){
    alert("tu numero es igual a 10");
    }else{ 
alert("Tu numero es menor a 10!");
}