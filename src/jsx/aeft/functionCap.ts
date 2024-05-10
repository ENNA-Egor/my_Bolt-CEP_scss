
export const butCap = ( param:string, Line:number) => {
   // function capStroke(Line, param) {
      app.beginUndoGroup("CapStrokefunction");
      //@ts-ignore
      function setRoundStrokeCap (later) {

         later.property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vectors Group").property("ADBE Vector Graphic - Stroke").property("ADBE Vector Stroke Line Cap").setValue(Line);

      }
   
      var setRoundCaps = function () {
         //wrapper function
         var activeComp = app.project.activeItem;
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