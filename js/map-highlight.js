var highlightLayer;
var mouseLayer;
var highlightchar;
var maptype;
function highlightFeature(e) {
    //highlightLayer = e.target;

    
    if (highlightLayer) {
      maptype = highlightLayer.getPane().getAttribute("class").substr(26,3);
      for (i in e.target._eventParents) {

        e.target._eventParents[i].resetStyle(highlightLayer);
      }
    }
    if (highlightLayer == e.target){
     highlightLayer = false;
     return;
   }
   highlightLayer = e.target;    
   maptype = highlightLayer.getPane().getAttribute("class").substr(26,3);
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
    maptype = mouseLayer.options.pane.substr(5,3);
    for (i in e.target._eventParents) {

      e.target._eventParents[i].setStyle({weight: maptype == "Geo" ? .5:2.5,});;
    }
  }



  mouseLayer = e.target;
  maptype = mouseLayer.options.pane.substr(5,3);
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
