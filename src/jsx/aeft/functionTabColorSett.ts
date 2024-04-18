export function add_color_shape(sett){
    var colorArrShape = sett.split(',');
    var newComp = app.project.activeItem;
    if (!newComp){
      alert ("Please select composition");
      return -1;
   }
   
    if (newComp.name.substr(0, 11) == "TrSC_Circle"){
      var prefLayer = "TrCircle_"}
      else if (newComp.name.substr(0, 12) == "TrSC_Polygon"){
      prefLayer = "TrPolygon_"}
      var numStr = numberStroke(prefLayer);
         layerRang (numStr, prefLayer);
      var nCol = colorArrShape.length;
      if (numStr>nCol){
         for(var m=0; m<numStr; m++){
            realStr =  m+1;
            var nameShape =prefLayer+realStr;
            var col =(m%nCol);
            for(i=0;i<nCol; i++){
               var newcolorArrShape = hexToRgb(colorArrShape[col]);
            newComp.layer(nameShape).property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group").property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Color").setValue ([newcolorArrShape[0], newcolorArrShape[1], newcolorArrShape[2]]);
            }
         } 
      }else {
         for(var n=1; n<=numStr; n++){
         var nameShape =prefLayer+n;
         var newcolorArrShape = hexToRgb(colorArrShape[n-1]);
         newComp.layer(nameShape).property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group").property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Color").setValue ([newcolorArrShape[0], newcolorArrShape[1], newcolorArrShape[2]]);
         }
      }
    }