// NOTE object below must be a valid JSON
window.DEMOSTRACION = $.extend(true, window.DEMOSTRACION, {
  "config": {
    "layoutSet": "navbar",
    "navigation": [
      {
        "title": "Clientes",
        "onExecute": "#datos",
        "icon": "group"
      },
      {
        "title": "Home",
        "onExecute": "#home",
        "icon": "home"
      },
      {
        "title": "About",
        "onExecute": "#about",
        "icon": "info"
      },
      {
        "title": "Productos",
        "onExecute": "#Productos",
        "icon": "productos"
      }
    ]
  }
});