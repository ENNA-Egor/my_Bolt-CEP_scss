
export const butCap = ( param:string, Line:number, nameComp:string) => {


   // function capStroke(Line, param) {
      app.beginUndoGroup("CapStrokefunction");
      var myWindow = new Window("dialog", "A warning");
      var myMessage = myWindow.add("statictext");
      //@ts-ignore
      function setRoundStrokeCap (later) {

         later.property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group").property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Line Cap").setValue(Line);

      }
   
      var setRoundCaps = function () {
         //wrapper function
         var activeComp = app.project.activeItem;
         if(nameComp !==activeComp?.name.substr(0, nameComp.length)){
            myMessage.text = "Select "+nameComp+ " composition";
            myWindow.show();
         }
         if (activeComp && activeComp instanceof CompItem) {
            var prefix = param;
            for (var s = 1; s <= activeComp.numLayers; s++) {
               var later = activeComp.layer(s);
               if (later instanceof ShapeLayer && later.name.substr(0, prefix.length) === prefix) {
                 //@ts-ignore
                  setRoundStrokeCap(later);
               }
            }
   
         }
      }
   
   
      setRoundCaps();
      app.endUndoGroup(); /// Отмена изменения Cap. 
   // }

}