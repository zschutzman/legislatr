var layer_Geo_0;
var layer_Hex_1;
var layer_Geo_02;
var layer_Hex_12;
var control;
var control2;
var baseMaps;
var basemaps2;
var map;
var map2;
var stripes;

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};


function buildmap(legend_entries){

    map = new L.map('map', {
        zoomControl:true, maxZoom:28, minZoom:1.5,
        crs : L.CRS.EPSG3857,
        zoom: 10,
        attributionControl: false,
        zoomSnap:.25,
        zoomDelta: .25,
        maxBoundsViscosity: 1.0,
    });
    var bounds_group = new L.featureGroup([]);
    stripes = new L.StripePattern();
    stripes.addTo(map);
    function setBounds(b) {
        console.log(b);
        map.options.maxBounds = b;
    }
    map.createPane('pane_Geo_House');       
    map.createPane('pane_Geo_Sen');
    map.createPane('pane_Geo_Cong');       
    map.createPane('pane_Hex_House');
    map.createPane('pane_Hex_Sen');       
    map.createPane('pane_Hex_Cong');


    map.getPane('pane_Geo_House').style.zIndex = 400;
    map.getPane('pane_Geo_House').style['mix-blend-mode'] = 'normal';
    layer_Geo_h = new L.geoJson(json_Geo_h, {
        attribution: '',
        pane: 'pane_Geo_House',
        onEachFeature: popup_populate,
        style: styler_geo,
    });
    bounds_group.addLayer(layer_Geo_h);
        //map.addLayer(layer_Hex_c);        
                 
var mapboxUrl = 'https://api.mapbox.com/styles/v1/zschutzman/cjp4fdxmo0uv62spdtehzites/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}';//'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
var accessToken = 'pk.eyJ1IjoienNjaHV0em1hbiIsImEiOiJjanAyenN4OTUwY3JhM3dsbndkNnNpYTR3In0.NTCzG2kg5DjLkx8zI7bT3Q';

var layer_tile = L.tileLayer(mapboxUrl, {pane: "pane_Geo_House", attribution: '', maxZoom: 28, accessToken: accessToken}).addTo(map);
var layer_cities = L.geoJson(json_cities, {pane: "pane_Geo_House", pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }, style: myStyle} ).addTo(map);

    //  var layer_Geo_h = L.tileLayer.mbTiles('https://zachschutzman.com/legislatr/tiles/'+stateFP+'.mbtiles',{
    //     pane: 'pane_Geo_House',
    //     minZoom: 1,
    //     maxZoom: 28,
    //     zoom: 10,
    // }).addTo(map);
     //bounds_group.addLayer(layer_Geo_h);


    map.getPane('pane_Geo_Sen').style.zIndex = 401;
    map.getPane('pane_Geo_Sen').style['mix-blend-mode'] = 'normal';
    layer_Geo_s = new L.geoJson(json_Geo_s, {
        attribution: '',
        pane: 'pane_Geo_Sen',
        onEachFeature: popup_populate,
        style: styler_geo,
    });
    bounds_group.addLayer(layer_Geo_s);
        //map.addLayer(layer_Geo_s);

        map.getPane('pane_Geo_Cong').style.zIndex = 401;
        map.getPane('pane_Geo_Cong').style['mix-blend-mode'] = 'normal';
        layer_Geo_c = new L.geoJson(json_Geo_c, {
            attribution: '',
            pane: 'pane_Geo_Cong',
            onEachFeature: popup_populate,
            style: styler_geo,
        });
        bounds_group.addLayer(layer_Geo_c);
        //map.addLayer(layer_Geo_c);           

        
        
        map.getPane('pane_Hex_House').style.zIndex = 401;
        map.getPane('pane_Hex_House').style['mix-blend-mode'] = 'normal';
        layer_Hex_h = new L.geoJson(json_Hex_h, {
            attribution: '',
            pane: 'pane_Hex_House',
            onEachFeature: popup_populate,
            style: styler_hex,
        });
        bounds_group.addLayer(layer_Hex_h);
        //map.addLayer(layer_Hex_h);


        map.getPane('pane_Hex_Sen').style.zIndex = 401;
        map.getPane('pane_Hex_Sen').style['mix-blend-mode'] = 'normal';
        layer_Hex_s = new L.geoJson(json_Hex_s, {
            attribution: '',
            pane: 'pane_Hex_Sen',
            onEachFeature: popup_populate,
            style: styler_hex,
        });
        bounds_group.addLayer(layer_Hex_s);
        //map.addLayer(layer_Hex_s);

        map.getPane('pane_Hex_Cong').style.zIndex = 401;
        map.getPane('pane_Hex_Cong').style['mix-blend-mode'] = 'normal';
        layer_Hex_c = new L.geoJson(json_Hex_c, {
            attribution: '',
            pane: 'pane_Hex_Cong',
            onEachFeature: popup_populate,
            style: styler_hex,
        });
        bounds_group.addLayer(layer_Hex_c);

        
        var grp_house = L.layerGroup([layer_cities,layer_Geo_h,layer_tile]);
        var grp_sen = L.layerGroup([layer_cities,layer_Geo_s,layer_tile]);
        var grp_cong = L.layerGroup([layer_cities,layer_Geo_c,layer_tile]);

        grp_house.addTo(map);
        
        baseMaps = {"Geographic House":grp_house, "Hex House":layer_Hex_h, "Geographic Senate":grp_sen, "Hex Senate":layer_Hex_s, "Geographic Congress":grp_cong, "Hex Congress":layer_Hex_c};
        control = new L.control.layers(baseMaps,{},{collapsed:true, position:'bottomleft'}).addTo(map);
        map.fitBounds(bounds_group.getBounds());
        //setBounds(bounds_group.getBounds());
        





        
        var legend = L.control({position: 'topright'});
        legend.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'leaflet-control');
            labels = ['<h4>Legend</h4>'];


            for (var i = 0; i < legend_entries.length; i++) {

                div.innerHTML += 
                labels.push(
                    '<i class="dot" style="background-color:' + legend_entries[i][1] + '"></i> ' +
                    legend_entries[i][0]);
                if (i != legend_entries.length -1){
                    labels.push('<br>');
                }
            }
            div.innerHTML = labels.join('');
            return div;
        };
        legend.addTo(map);
    }
