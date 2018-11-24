var pane2reso = {"pane_Geo_Sen" : "Senate", "pane_Geo_House": "House", "pane_Geo_Cong": "Congressional", "pane_Hex_Sen" : "Senate", "pane_Hex_House": "House", "pane_Hex_Cong": "Congressional"};
var pane2rep = {"pane_Geo_Sen" : "Senator", "pane_Geo_House": "Representative", "pane_Geo_Cong": "Representative", "pane_Hex_Sen" : "Senator", "pane_Hex_House": "Representative", "pane_Hex_Cong": "Representative"};



function nth(n){return[n+"st",n+"nd",n+"rd"][((n+90)%100-10)%10-1]||n+"th"}

function popup_populate(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td style="white-space: nowrap" colspan="1"><h4>' + pane2reso[layer.options['pane']]  + ' District</h4><br />' + nth(parseInt(String(feature.properties['District']))) + '</td>\
            </tr>\
            <tr>\
                <td style="white-space: nowrap" colspan="1"><h4>Name of '+ pane2rep[layer.options['pane']] + '</h4><br />' + String(feature.properties['Name']) + '</td>\
            </tr>\
            <tr>\
                <td style="white-space: nowrap" colspan="1"><h4>Party</h4><br />' + String(feature.properties['Party']) + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
    
            /*layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        console.log("filler");
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
                click: highlightFeature,
            });*/
            layer.on({
                click: highlightFeature,
            });
}

function styler(feature) {
    hex=true;
    switch(String(feature.properties['Party']).charAt()) {
        case 'C':
            return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.5  , 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(240,236,2,1.0)',
    }
            break;
        case 'D':
            return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.5  , 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(70,112,238,1.0)',
    }
            break;
        case 'I':
            return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.5  , 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(240,236,2,1.0)',
    }
            break;
        case 'R':
            return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.5  , 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(238,64,64,1.0)',
    }
            break;
        case 'U':
            return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.5  , 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(240,236,2,1.0)',
    }
            break;
        default:
            return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.5  , 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(223,195,122,1.0)',
    }
            break;
    }
}
