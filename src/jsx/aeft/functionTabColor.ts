
export const replaceColorTS = (obj: { picker_check_value: boolean, picker_path:string, colorStart: string, arrIndex: number}) => {
   var prefLayer: string = "";
   alert(obj.colorStart)
   var newComp =app.project.activeItem;
   var num = obj.arrIndex+1;
   if(`${obj.picker_check_value}` === 'true'){
      var externalLibrary = new ExternalObject("lib:"+`${obj.picker_path}`+'/public/ColorPicker/ColorPicker_x64.aex');
      var oldColor = '0x'+`${obj.colorStart}`;

      //@ts-ignore
      var color = externalLibrary.colorPicker(oldColor, "dialog_title");
      if (color ==-1){
         color ='0x'+`${obj.colorStart}`;
      }
   } else {
      var color = $.colorPicker(color);
   }
   
   // if (color !=-1) {
      //       var colVal = hexToRgb(color); 
      //       //   var newComp = app.project.activeItem;
      //       if (!newComp){
         //          alert ("Please select composition");
         //          return -1;
         //       }
         // if (newComp){
         //    if (newComp.name.substr(0, 11) == "TrSC_Circle"){
         //       prefLayer = "TrCircle_"}
         //       else if (newComp.name.substr(0, 12) == "TrSC_Polygon"){
         //          prefLayer = "TrPolygon_"}
         // }
                  // var numStr = numberStroke(prefLayer);
                  // layerRang (numStr, prefLayer);
                  // alert(colVal)
               // return colVal;

               return color;
         // } else {
         // return -1;
      // }
   // });
               
 };
export const plusPalTS = (obj: { picker_check_value: boolean, picker_path:string, colorStart: string}) => {
   var prefLayer: string = "";
   var newComp =app.project.activeItem;
   if(`${obj.picker_check_value}` === 'true'){
      var externalLibrary = new ExternalObject("lib:"+`${obj.picker_path}`+'/public/ColorPicker/ColorPicker_x64.aex');
      var oldColor = '0x'+`${obj.colorStart}`;

      //@ts-ignore
      var color = externalLibrary.colorPicker(oldColor, "dialog_title");
      if (color ==-1){
         color ='0x'+`${obj.colorStart}`;
      }
   } else {
      var color = $.colorPicker(color);
   }
         // if (newComp){
         //    if (newComp.name.substr(0, 11) == "TrSC_Circle"){
         //       prefLayer = "TrCircle_"}
         //       else if (newComp.name.substr(0, 12) == "TrSC_Polygon"){
         //          prefLayer = "TrPolygon_"}
         // }

               return color;             
 };


 function hexToRgb(hex: string | number){  
   if (typeof hex === 'string') hex = parseInt(hex, 16);  
   var r = (hex >> 16) & 0xFF;  
   var g = (hex >> 8 ) & 0xFF;  
   var b = (hex >> 0 ) & 0xFF;  
   return 'rgb'+ '('+r+',' +g+','+ b +')';  
  }

  /**
 * функция определяет количество шейповых элементов в композиции
 * @param {string} layerName
 * @returns {number}
//  */
// function numberStroke (prefLayer:string){
//    var newComp = app.project.activeItem;
//    var prefix = prefLayer;
//    let num: number=0; 
//    for(var i=1;i<=newComp.numLayers;i++) 
//    alert (newComp.layer(i).name);
//    if(newComp.layer(i).name.substr(0, prefix.length) == prefix)
//    num++;
//   return num;  //количество строков
// }


/**
 * функция высираивает шейповые слои по возрастанию
 * @param {number}  layerNum
 * @param {string} layerName 
 */
//         function layerRang (layerNum, layerName){ 
//          var newComp = app.project.activeItem;
//          var prefix = layerName;
//          newComp.layer(prefix  + 1).moveToBeginning();
//          for (var x = 2; x<=layerNum; x++){
//           newComp.layer(prefix  + x).moveAfter(newComp.layer(prefix  +(x-1)));
//           }
//  }
 