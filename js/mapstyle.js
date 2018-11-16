function sen_popup_populate(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td style="white-space: nowrap" colspan="2"><strong>Senate District</strong><br />' + (feature.properties['Senate Dis'] !== null ? Autolinker.link(String(feature.properties['SLDUST'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td style="white-space: nowrap" colspan="2"><strong>Name of Senator</strong><br />' + (feature.properties['Name of Se'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td style="white-space: nowrap" colspan="2"><strong>Party</strong><br />' + (feature.properties['Party'] !== null ? Autolinker.link(String(feature.properties['Party'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});

            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
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
        weight: hex == true?3.0:1.0, 
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
        weight: hex == true?3.0:1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(59,1,231,1.0)',
    }
            break;
        case 'I':
            return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: hex == true?3.0:1.0, 
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
        weight: hex == true?3.0:1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(227,0,3,1.0)',
    }
            break;
        case 'U':
            return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: hex == true?3.0:1.0, 
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
        weight: hex == true?3.0:1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(223,195,122,1.0)',
    }
            break;
    }
}
