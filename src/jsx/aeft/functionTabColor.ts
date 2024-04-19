import {add_color_shape } from './functionTabColorSett'

export const replaceColorTS = (obj: { picker_check_value: boolean, picker_path:string, colorStart: string, arrIndex: number}) => {
   var prefLayer: string = "";
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
            // var colVal = hexToRgb(color);
               return color;

               
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


               return color;             
 };


 export function hexToRgb(hex: string | number){ 
   alert('Ok') 
   if (typeof hex === 'string') hex = parseInt(hex, 16);  
   var r = ((hex >> 16) & 0xFF)/255;  
   var g = ((hex >> 8 ) & 0xFF)/255;  
   var b = ((hex >> 0 ) & 0xFF)/255;  // добавил деление на 255
   alert('rgb'+ '('+r+',' +g+','+ b +')');  
   // return 'rgb'+ '('+r+',' +g+','+ b +')';  
   return [r,g, b];  
  }

  /**
 * функция определяет количество шейповых элементов в композиции
 * @param {string} layerName
 * @returns {number}
//  */
export  function numberStroke (prefLayer:string, newComp:any):number{
   var prefix = prefLayer;
   let num: number=0; 
   for(var i=1;i<=newComp.numLayers;i++) 
   if(newComp.layer(i).name.substr(0, prefix.length) == prefix)
      num++;
  return num;  //количество строков
}


/**
 * функция высираивает шейповые слои по возрастанию
 * @param {number}  layerNum
 * @param {string} layerName 
 */
     export   function layerRang (layerNum: number, layerName: string, newComp: any){ 
         var prefix = layerName;
         newComp.layer(prefix  + 1).moveToBeginning();
         for (var x = 2; x<=layerNum; x++){
          newComp.layer(prefix  + x).moveAfter(newComp.layer(prefix  +(x-1)));
          }
 }
 

 export const colorSetTS = (color:string[]) => {
   var prefLayer: string = "";
   var numStr: number = 0;
   var newComp = app.project.activeItem;
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
      }//@ts-ignore
      add_color_shape(color, newComp, numStr, prefLayer);
 };