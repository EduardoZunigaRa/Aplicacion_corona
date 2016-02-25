$(document).ready(function (e) {
    $.ajax({
        type: "GET",
        url: "assets/Productos.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Productos').each(function () {
                $(xml).find('Producto').each(function () {
                    //console.log($(this).find('IdCliente').text() +" "+$(this).find('Nombre').text() +" "+$(this).find('Direccion').text())
                    col_productos = [{ "IdProducto": $(this).find('IdProducto').text(), "DescripcionLarga": $(this).find('DescripcionLarga').text(), "Existencias": $(this).find('Existencias').text(), "Precio": $(this).find('Precio').text() }]
                    row_productos.push(col_productos[0]);
                    console.log(col_productos[0])
                    col_productos.pop();
                });

            });
        }
    });
   
})

var col_productos = [];
var row_productos = [];