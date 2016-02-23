$(document).ready(function (e) {
    $.ajax({
        type: "GET",
        url: "Ventas_datos.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Ventas').each(function () {
                $(xml).find('Venta').each(function () {
                    //console.log($(this).find('IdCliente').text() +" "+$(this).find('Nombre').text() +" "+$(this).find('Direccion').text())
                    col_ventas = [{ "IdVenta": $(this).find('IdVenta').text(), "CodigodeBarras": $(this).find('CodigodeBarras').text(), "DescripcionLarga": $(this).find('DescripcionLarga').text() }]
                    row_ventas.push(col_ventas[0]);
                    console.log(col_ventas[0])
                    col_ventas.pop();
                });
            });
        }
    });
})

var col_ventas = [];
var row_ventas = [];