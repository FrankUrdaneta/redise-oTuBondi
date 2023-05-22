 // Crear una capa base de OpenStreetMap
 var osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  
  // Crear el mapa con la capa base de OpenStreetMap
  var map = new ol.Map({
    target: 'map',
    layers: [osmLayer],
    view: new ol.View({
      center: ol.proj.fromLonLat([-64.1833, -31.4167]), // Coordenadas de Córdoba capital, Argentina
      zoom: 14
    })
  });


  document.addEventListener('DOMContentLoaded', function() {
    var icons = document.querySelectorAll('.icon_footer');
    
    icons.forEach(function(icon) {
      icon.addEventListener('click', function() {
        icons.forEach(function(otherIcon) {
          otherIcon.classList.remove('active');
        });
        
        this.classList.add('active');
      });
    });
  });
  
  