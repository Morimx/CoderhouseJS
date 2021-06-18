var ingProducto = parseInt(prompt("Ingrese el numero del producto deseado\n 1) Coca cola \n 2) Pepsi \n 3) Seven-up \n 4) Cancelar"))
var StockCocacola = 10
var StockPepsi = 10
var StockSevenup = 10


while(ingProducto != "4"){
   switch (ingProducto) {
       case 1:
           if(StockCocacola > 0){
            StockCocacola -= 1;
            alert(`Seleccionaste coca cola, nos quedan ${StockCocacola} en stock`);}
            break;
        case 2:
            StockPepsi -= 1;
            alert(`Seleccionaste Pepsi, nos quedan ${StockPepsi} en stock`);
            break;
        case 3:
            StockSevenup -= 1;
            alert(`Seleccionaste Seven-up, nos quedan ${StockSevenup} en stock`)
            break;
       default:
        alert(`Selecciona un producto o seleecione 4 para salir`);   
        break;
   }
   ingProducto = parseInt(prompt("Ingrese el numero del producto deseado\n 1) Coca cola \n 2) Pepsi \n 3) Seven-up \n 4) Cancelar"))
}

console.log("Quedan actualmente en stock:")
console.log(StockCocacola)
console.log(StockPepsi)
console.log(StockSevenup)