DEMOSTRACION.menu = function (params) {

    var viewModel = {
        
        cliente: function () {
            DEMOSTRACION.app.navigate("datos/")
        },
        producto: function () {
            DEMOSTRACION.app.navigate("productos/")
        },
        venta: function () {
            DEMOSTRACION.app.navigate("ventas/")
        },

    };
    return viewModel;
};