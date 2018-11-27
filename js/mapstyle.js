var pane2reso = {"pane_Geo_Sen" : "Senate", "pane_Geo_House": "House", "pane_Geo_Cong": "Congressional", "pane_Hex_Sen" : "Senate", "pane_Hex_House": "House", "pane_Hex_Cong": "Congressional"};
var pane2rep = {"pane_Geo_Sen" : "Senator", "pane_Geo_House": "Representative", "pane_Geo_Cong": "Representative", "pane_Hex_Sen" : "Senator", "pane_Hex_House": "Representative", "pane_Hex_Cong": "Representative"};



function nth(n){return[n+"st",n+"nd",n+"rd"][((n+90)%100-10)%10-1]||n+"th"}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


function replaceNbsps(str) {
  var re = new RegExp(String.fromCharCode(160), "g");
  return str.replace(re, " ");
}


String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};


function popup_populate(feature, layer) {
    content = ['<table id="district_table">'];
    
        
     content.push(
            '<tr>\
                <td  colspan="1"><h4>' + pane2reso[layer.options['pane']]  + ' District</h4>' + nth(parseInt(String(feature.properties['District']))) + '</td>\
            </tr>\
            <tr>\
                <td  colspan="1"><h4>Name of '+ pane2rep[layer.options['pane']] + '</h4>' + String(feature.properties['Name']) + '</td>\
            </tr>\
            <tr>\
                <td  colspan="1"><h4>Party</h4>' + String(feature.properties['Party']) + '</td>\
            </tr>\
         '
             );
        
        
    for (field in feature.properties){
        if (field != 'District' && field != 'Party' && field != 'Name' && String(feature.properties[field]) != ''){
            content.push(' <tr>\
                <td  colspan="1"><h4>' + toTitleCase((field).replace("."," ")) + '</h4>' + String(feature.properties[field]) + '</td>\
            </tr>\
        '
            );
        }
    }
    content.push('</table>');
    content = content.join('');

    content = replaceNbsps(content);
   
    feature.properties['infostring'] = content;
            layer.on({
                click: highlightFeature,
                mouseover: mousein,
            });
}

function styler(feature) {
    switch(String(feature.properties['Party']).charAt()) {
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
        //fillPattern: stripes,
        fillColor: 'rgba(64,64,238,1.0)',
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
        fillColor: 'rgba(238,238,64,1.0)',
    }
            break;
    }
}
