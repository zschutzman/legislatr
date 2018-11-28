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




function buildmap(legend_entries){

    map = new L.map('map', {
        zoomControl:true, maxZoom:28, minZoom:1,
        crs : L.CRS.EPSG3857,
        zoom: 10,
        attributionControl: false,
        zoomSnap:.5
    });
    var bounds_group = new L.featureGroup([]);
    stripes = new L.StripePattern();
    stripes.addTo(map);
    function setBounds() {
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
        style: styler,
    });
    bounds_group.addLayer(layer_Geo_h);
    map.addLayer(layer_Geo_h);


    map.getPane('pane_Geo_Sen').style.zIndex = 401;
    map.getPane('pane_Geo_Sen').style['mix-blend-mode'] = 'normal';
    layer_Geo_s = new L.geoJson(json_Geo_s, {
        attribution: '',
        pane: 'pane_Geo_Sen',
        onEachFeature: popup_populate,
        style: styler,
    });
    bounds_group.addLayer(layer_Geo_s);
        //map.addLayer(layer_Geo_s);

        map.getPane('pane_Geo_Cong').style.zIndex = 401;
        map.getPane('pane_Geo_Cong').style['mix-blend-mode'] = 'normal';
        layer_Geo_c = new L.geoJson(json_Geo_c, {
            attribution: '',
            pane: 'pane_Geo_Cong',
            onEachFeature: popup_populate,
            style: styler,
        });
        bounds_group.addLayer(layer_Geo_c);
        //map.addLayer(layer_Geo_c);           

        
        
        map.getPane('pane_Hex_House').style.zIndex = 401;
        map.getPane('pane_Hex_House').style['mix-blend-mode'] = 'normal';
        layer_Hex_h = new L.geoJson(json_Hex_h, {
            attribution: '',
            pane: 'pane_Hex_House',
            onEachFeature: popup_populate,
            style: styler,
        });
        bounds_group.addLayer(layer_Hex_h);
        //map.addLayer(layer_Hex_h);


        map.getPane('pane_Hex_Sen').style.zIndex = 401;
        map.getPane('pane_Hex_Sen').style['mix-blend-mode'] = 'normal';
        layer_Hex_s = new L.geoJson(json_Hex_s, {
            attribution: '',
            pane: 'pane_Hex_Sen',
            onEachFeature: popup_populate,
            style: styler,
        });
        bounds_group.addLayer(layer_Hex_s);
        //map.addLayer(layer_Hex_s);

        map.getPane('pane_Hex_Cong').style.zIndex = 401;
        map.getPane('pane_Hex_Cong').style['mix-blend-mode'] = 'normal';
        layer_Hex_c = new L.geoJson(json_Hex_c, {
            attribution: '',
            pane: 'pane_Hex_Cong',
            onEachFeature: popup_populate,
            style: styler,
        });
        bounds_group.addLayer(layer_Hex_c);
        //map.addLayer(layer_Hex_c);        
        
        

        
        baseMaps = {"Geographic House":layer_Geo_h, "Hex House":layer_Hex_h, "Geographic Senate":layer_Geo_s, "Hex Senate":layer_Hex_s, "Geographic Congress":layer_Geo_c, "Hex Congress":layer_Hex_c};
        control = new L.control.layers(baseMaps,{},{collapsed:true, position:'bottomleft'}).addTo(map);
        map.fitBounds(bounds_group.getBounds());
        setBounds();





        
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
