while (flag){
    articulos = [];
    var option = prompt("La jefecita: \n 1.Agg")
    switch(option){
        case "1":
            id = prompt("Agrege el codigo del articulo")
                r = prompt("Descrpcion del articulo?")
                type = prompt("Tipo de articulo?")
                purchasePrice = parseFloat(prompt("Precio de compra?", "0.00"));
                saleP = parseFloat(prompt("Inserte precio de la venta", "0.00"));
                stock = parseInt(prompt("Inserte el stock del articulo", "0"));
                var articulo = {id, r, type, purchasePrice, saleP, stock};
                articulos.push(articulo);
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            articulos.forEach(element => {
                console.log('Articulo: ' + element.r + 'Stock: ' + element.stock)
            });
            break;
        case "6":
            alert("Adios gfecita :`)")
            flag = false;
            break;
        case null:
            alert("Hasta la vista gfa");
            flag = false;
            break;
        default:
            alert("Escoja una opcion valida: ");
            break;
    }
}

