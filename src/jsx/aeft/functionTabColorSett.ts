import {hexToRgb} from './functionTabColor'
import {numberStroke} from './functionTabColor'
import {layerRang} from './functionTabColor'



export const colorSetTS = (color:string[]) => {
   var prefLayer: string = "";
   var numStr: number = 0;
   var newComp:_ItemClasses | null = app.project.activeItem;
   if (!newComp){
         alert ("Please select composition");
         return;
      }
      if (newComp){
       if (newComp.name.substr(0, 11) == "TrSC_Circle"){
          prefLayer = "TrCircle_"}
          else if (newComp.name.substr(0, 12) == "TrSC_Polygon"){
             prefLayer = "TrPolygon_"}

              numStr = numberStroke(prefLayer, newComp);
              layerRang (numStr, prefLayer, newComp);
      }
      var colorArrShape = color;
      var i:number;
      var n:number;
      var nCol:number;
     
         nCol = colorArrShape.length;
         if (numStr>nCol){
            for(var m=0; m<numStr; m++){
               var realStr =  m+1;
               var nameShape =prefLayer+realStr;
               var col =(m%nCol);
               for(i=0;i<nCol; i++){
                  var newcolorArrShape = hexToRgb(colorArrShape[col]);
                  //@ts-ignore
                  newComp.layer(nameShape).property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group").property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Color").setValue ([newcolorArrShape[0], newcolorArrShape[1], newcolorArrShape[2]]);
                 }
              } 
           }else {
           for(var n=1; n<=numStr; n++){
              var nameShape =[prefLayer, n].join('');
              var newcolorArrShape = hexToRgb(colorArrShape[n-1]);
              //@ts-ignore
              newComp.layer(nameShape).property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group").property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Color").setValue ([newcolorArrShape[0], newcolorArrShape[1], newcolorArrShape[2]]);
           }
        }
 };

