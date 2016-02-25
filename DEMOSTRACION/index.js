window.DEMOSTRACION = window.DEMOSTRACION || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    // To customize the Generic theme, use the DevExtreme Theme Builder (http://js.devexpress.com/ThemeBuilder)
    // For details on how to use themes and the Theme Builder, refer to the http://js.devexpress.com/Documentation/Guide/#themes article

    $(document).on("deviceready", function () {
        navigator.splashscreen.hide();
        if(window.devextremeaddon) {
            window.devextremeaddon.setup();
        }
        $(document).on("backbutton", function () {
            DevExpress.processHardwareBackButton();
        });
    });

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !DEMOSTRACION.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "android":
                navigator.app.exitApp();
                break;
            case "win":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }


    DEMOSTRACION.app = new DevExpress.framework.html.HtmlApplication({
        namespace: DEMOSTRACION,
        layoutSet: DevExpress.framework.html.layoutSets[DEMOSTRACION.config.layoutSet],
        navigation: DEMOSTRACION.config.navigation,
        commandMapping: DEMOSTRACION.config.commandMapping
    });
    DEMOSTRACION.app.router.register(":view/:id", { view: "menu", id: undefined });
    //DEMOSTRACION.app.router.register(":view/:id", { view: "menu", id: undefined });
    DEMOSTRACION.app.on("navigatingBack", onNavigatingBack);
    DEMOSTRACION.app.navigate();
});