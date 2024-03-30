

export const colorSettingsTS = (obj: { picker_check_value: boolean, picker_path:string}) => {
   // if(`${obj.picker_check_value}` === 'true'){
   //    var externalLibrary = new ExternalObject("lib:"+`${obj.picker_path}`+'/settingsData/color_picker/ColorPicker_x64.aex');
   //    var oldColor = color_start;
   //     var color = externalLibrary.colorPicker(oldColor, "dialog_title");
   //     if (color ==-1){
   //       color =color_start;
   //    }
   // } else {
      var color = $.colorPicker ();
   // }
   // if (color !=-1) {
   //       var colVal = hexToRgb(color); 
   //   var newComp = app.project.activeItem;
   //       if (!newComp){
   //          alert ("Please select composition");
   //          return -1;
   //       }
   //       if (newComp.name.substr(0, 11) == "TrSC_Circle"){
   //          var prefLayer = "TrCircle_"}
   //          else if (newComp.name.substr(0, 12) == "TrSC_Polygon"){
   //          prefLayer = "TrPolygon_"}
   //    var numStr = numberStroke(prefLayer);
   //                 layerRang (numStr, prefLayer);
   //          return (colVal);
            return color;
      // } else {
   //    return -1;
   // }
               
 };
 