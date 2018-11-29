var highlightLayer;
var mouseLayer;
var highlightchar;

function highlightFeature(e) {
    //highlightLayer = e.target;

    
    if (highlightLayer) {
        for (i in e.target._eventParents) {
            
            e.target._eventParents[i].resetStyle(highlightLayer);
        }
    }
    if (highlightLayer == e.target){
       highlightLayer = false;
       return;
   }
   highlightLayer = e.target;    
   
   document.getElementById('districtTable').innerHTML = highlightLayer.feature.properties['infostring'];

   
   highlightchar = String(highlightLayer.feature.properties['Party']).charAt();
   if (highlightchar == 'D'){ highlightchar = "#9999e0";}
   else if (highlightchar == 'R'){ highlightchar = "#e09999";}
   else { highlightchar = "#e0e099";}
   if (e.target.feature.geometry.type === 'LineString') {
    highlightLayer.setStyle({
        color: highlightchar,
    });
} else {
    highlightLayer.setStyle({
        fillColor: highlightchar,
        //fillOpacity: 1
    });
}
}

function mousein(e){
    
    if (mouseLayer) {
        for (i in e.target._eventParents) {
            
            e.target._eventParents[i].setStyle({weight: 1.5,});;
        }
    }
    
    
    
    mouseLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
        mouseLayer.setStyle({
            weight: 5,

        });
    } else {
        mouseLayer.setStyle({
            weight: 5,

        });
    }
}
