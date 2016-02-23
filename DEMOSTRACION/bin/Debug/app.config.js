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
        "title": "Productos",
        "onExecute": "#productos",
        "icon": "box"
      },
      {
        "title": "ventas",
        "onExecute": "#ventas",
        "icon": "ventas"
      }
    ]
  }
});