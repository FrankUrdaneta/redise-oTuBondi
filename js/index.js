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

  const icons = document.querySelectorAll('.icon_footer');
  
  icons.forEach(function(icon) {
    icon.addEventListener('click', function() {
      // Ocultar todos los textos
      const textos = document.querySelectorAll('.contenedor_footer .icon_text');
      textos.forEach(function(texto) {
        texto.style.display = 'none';
      });
      
      // Mostrar solo el texto correspondiente al icono clickeado
      const texto = this.nextElementSibling;
      texto.style.display = 'block';
      
      // Remover la clase 'active' de todos los iconos
      icons.forEach(function(otherIcon) {
        otherIcon.classList.remove('active');
      });
      
      // Agregar la clase 'active' al icono clickeado
      this.classList.add('active');
    });
  });
  
  