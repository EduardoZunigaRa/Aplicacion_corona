$(document).ready(function (e) {
    $.ajax({
        type: "GET",
        url: "assets/Clientes_datos.xml",
        dataType: "xml",
        success: function (xml) { 
            $(xml).find('Clientes').each(function () { 
                $(xml).find('Cliente').each(function () {
                    //console.log($(this).find('IdCliente').text() +" "+$(this).find('Nombre').text() +" "+$(this).find('Direccion').text())
                    col_clientes = [{ "IdCliente": $(this).find('IdCliente').text(), "Nombre": $(this).find('Nombre').text(), "Direccion": $(this).find('Direccion').text() }]
                    row_clientes.push(col_clientes[0]); 
                    col_clientes.pop();
                });
            });
        }
    });  
})

var col_clientes = [];
var row_clientes = [];