var layer_Geo_0;
var layer_Hex_1;
var control;
var baseMaps;
var map;
 
var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
        highlightLayer.setStyle({
        color: '#ffff00',
        });
    } else {
        highlightLayer.setStyle({
        fillColor: '#ffff00',
        fillOpacity: 1
        });
    }
}


function clickEvent(e){
    document.getElementById('leaflet-popup-content').innerHTML = document.getElementById('leaflet-popup-content').innerHTML;
}

function oneachfeature(layer, feature){
    sen_popup_populate(feature, layer);
    layer.on({click : clickEvent});
}
 
 
 
 function buildmap(){
map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:1,
            crs : L.CRS.EPSG4326,
        });
 map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        var hash = new L.Hash(map);
        map.createPane('pane_Geo_0');       
        map.createPane('pane_Hex_1');           
        map.getPane('pane_Geo_0').style.zIndex = 400;
        map.getPane('pane_Geo_0').style['mix-blend-mode'] = 'normal';
        layer_Geo_0 = new L.geoJson(json_Geo_0, {
            attribution: '',
            pane: 'pane_Geo_0',
            onEachFeature: oneachfeature,
            style: styler,
        });
        bounds_group.addLayer(layer_Geo_0);
        map.addLayer(layer_Geo_0);


        map.getPane('pane_Hex_1').style.zIndex = 401;
        map.getPane('pane_Hex_1').style['mix-blend-mode'] = 'normal';
        layer_Hex_1 = new L.geoJson(json_Hex_1, {
            attribution: '',
            pane: 'pane_Hex_1',
            onEachFeature: oneachfeature,
            style: styler,
        });

           
        
        
        bounds_group.addLayer(layer_Hex_1);
        baseMaps = {"Geographic":layer_Geo_0, "Hex":layer_Hex_1};
        control = L.control.layers(baseMaps,{},{collapsed:false}).addTo(map);
        map.fitBounds(bounds_group.getBounds());
        setBounds();
        
        }
