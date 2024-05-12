
import {colorSetTS} from './functionTabColorSett'

/// Кнопка плюс элемента
export const plusEl=(prefComp:string, prefLayer:string, color:[string])=> {
   app.beginUndoGroup("elementPlusfunction");
   var myWindow = new Window("dialog", "A warning");
   var myMessage = myWindow.add("statictext")
   var newComp = app.project.activeItem;
   var x:number = prefComp.length - 5;
   var prefMesage = prefComp.substr(5, x);
   var nu:number;
   //@ts-ignore
   if (newComp.name.substr(0, prefComp.length) === prefComp) {
      var prefix = prefLayer,
         num = 0;
          //@ts-ignore
      for (var i = 1; i <= newComp.numLayers; i++)
         //@ts-ignore
      if (newComp.layer(i).name.substr(0, prefix.length) === prefix)
         num++;
      num;  //количество строков
      if(num==20){
         myMessage.text ='Cannot create more than 20 items.';
         myWindow.show();
         return
      }
      alert(prefLayer+ '1')
          //@ts-ignore
      app.project.activeItem.layer(prefLayer + "1").duplicate()  // Дублируем слой
   }
   else {
      myMessage.text = "Select "+prefMesage+ "  composition";
      myWindow.show();
   }
   var activComp = newComp;
   if (prefComp === "TrSC_Circle-") {
      //@ts-ignore
      circleResize(activComp, '1', num);
   } else if (prefComp == "TrSC_Polygon-") {
      //@ts-ignore
      polygonResize(activComp, '1', num);
   }
           colorSetTS(color)
   app.endUndoGroup(); /// Отмена добавления элемента.

}

 //@ts-ignore
function circleResize(newComp, n, num) { ////Изменяем размер окружностей
   //@ts-ignore
   var numShapeLaer = num + (+n);  //// Количество строков
   var w = newComp.width;
   var h = newComp.height;
   var a = newComp.pixelAspect;
   var valueStroke = Math.sqrt(Math.pow(h / 2, 2) + Math.pow(w / 2 * a, 2)) / numShapeLaer;
   newComp.layer("Controll")("Effects")("ANIMATION _CONTROL_C")("Size").setValue(valueStroke);
   newComp.layer("Controll")("Effects")("ANIMATION _CONTROL_C")("Stroke").setValue(valueStroke);
   newComp.layer("Controll")("ADBE Effect Parade")("Pseudo/ANIM _CONTROL_C")("Pseudo/ANIM _CONTROL_C-0012").setValue(valueStroke * 2);

}
 //@ts-ignore
function polygonResize(newComp, n) {  ////Изменяем размер полигонов
    //@ts-ignore
   var numShapeLaer = num + (+n);  //// Количество строков
   var w = newComp.width;
   var h = newComp.height;
   var a = newComp.pixelAspect;
   var valueStroke = Math.sqrt(Math.pow(h / 2, 2) + Math.pow(w / 2 * a, 2)) / numShapeLaer;
   var point = newComp.layer("Controll_P").property("ADBE Effect Parade").property("Pseudo/ANIM _CONTR_P").property("Pseudo/ANIM _CONTR_P-0013").value;
   var angleB = 360 / point;
   var angleA = (180 - (angleB)) / 2;
   var angleR = Math.PI / 180 * angleA
   var StepVal = valueStroke / Math.sin(angleR);
   newComp.layer("Controll_P")("Effects")("ANIMATION _CONTROL_P")("Size").setValue(valueStroke / 2);
   newComp.layer("Controll_P")("Effects")("ANIMATION _CONTROL_P")("Stroke").setValue(valueStroke);
   newComp.layer("Controll_P")("Effects")("ANIMATION _CONTROL_P")("Step").setValue(StepVal);
}

/// Кнопка минус элемента

//  export const elementMinus(prefComp, prefLayer) => {
//    app.beginUndoGroup("elementMinusfunction");
//    var myWindow = new Window("dialog", "A warning");
//    var myMessage = myWindow.add("statictext");
//    var newComp = app.project.activeItem;
//    var prefixComp = prefComp;
//    if (newComp.name.substr(0, prefixComp.length) == prefixComp) {
//       var prefix = prefLayer;
//       num = 0;
//       for (var i = 1; i <= newComp.numLayers; i++)
//          if (newComp.layer(i).name.substr(0, prefix.length) == prefix)
//             num++;
//       num;  //количество строков
//       if (num >= 3) {
//          app.project.activeItem.layer(prefLayer + num).remove() // Удаляем слой
//          var activComp = newComp;
//          if (prefComp == "TrSC_Circle-") {
//             circleResize(activComp, '-1');
//          } else if (prefComp == "TrSC_Polygon-") {
//             polygonResize(activComp, '-1');
//          }
//          app.endUndoGroup(); /// Отмена удаления элемента.


//       } else {
//          // var myWindow = new Window("dialog", "A warning");
//          // var myMessage = myWindow.add("statictext");
//          myMessage.text = "The composition can not be less than two elements";
//          myWindow.show();
//       }
//    }
//    else {
//       // var myWindow = new Window("dialog", "A warning");
//       // var myMessage = myWindow.add("statictext");
//       myMessage.text = "Select Circle composition";
//       myWindow.show();
//    }
// }