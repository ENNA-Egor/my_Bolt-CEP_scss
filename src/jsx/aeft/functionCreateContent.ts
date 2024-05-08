import {path, fs} from "../../js/lib/cep/node";

import {colorSetTS} from './functionTabColorSett'


export const createContent = (startText:string, param:string, dataCreate:any, patFfx:string) => {
 

    //////////////////////////////////////создаём контент.//////////////////////////////////////////////
/////////////////////////////////// Копирайт к выржениям
var CopyrightText = "\/\/\/  TransitoinStrokeCreator Version 3.1 \r\n\/\/\/  By ENNA Studio (EgorN) e.yudakov@gmail.com     https://vk.com/egor_n60    http://videophotopro.ru/forum.php (ЕгорН)\r\n\r\n\/\/\/"
var CopyrightText_С = CopyrightText + " Circle preset."
var CopyrightText_P = CopyrightText + " Polygon preset."

var StroceElement = param;
var countElement = dataCreate.num_element;
var resolutionW = dataCreate.resolution_w;
var resolutionH = dataCreate.resolution_h;
var frameR = dataCreate.framerate;
var durat = dataCreate.duration;
var influ = dataCreate.influence;
const ffxPath =patFfx;
var colorArr = dataCreate.colors;
var numPoint = dataCreate.num_points;


   app.beginUndoGroup("Creative Stroke Compositions");
   //////////////////////////////////////создаём папки.
   var n = 0;
   var numScriptFolder = 1;
   var NameComp = "TrSC_" + StroceElement;
   for (var i = 1; i <= app.project.numItems; i++) {
      var thisItem = app.project.item(i);
      if (thisItem.name === "Script_Items") {
         numScriptFolder = i;
         n = n + 1;
      }
   }

   var m = 0;
   for (var y = 1; y <= app.project.numItems; y++) {
      var thisItem = app.project.item(y);
      if (thisItem.name == "Tr_" + StroceElement) {
         m = m + 1
         var ind = y;
      }
   }

   var num = 1;
   for (var z = 1; z <= app.project.numItems; z++) {
      var thisItem = app.project.item(z);
      if (thisItem.name.substr(0, NameComp.length) == NameComp) {
         num = num + 1;

      }
   }




   if (n == 0 && m == 0) {
      var scriptFolder = app.project.items.addFolder("Script_Items");
      var ellFolder = app.project.items.addFolder("Tr_" + StroceElement);
      ellFolder.parentFolder = scriptFolder;
   }
   else if (n == 1 && m == 0) {
      var ellFolder = app.project.items.addFolder("Tr_" + StroceElement);
        //@ts-ignore
      var scriptFolder = app.project.item(numScriptFolder);
      ellFolder.parentFolder = scriptFolder;
   }
   else {
      //@ts-ignore
      var ellFolder = app.project.item(ind);
        //@ts-ignore
      var scriptFolder = app.project.item(numScriptFolder);
   }
   //////////////////////////////////////////////////////создаём композиции
   var newComp = app.project.activeItem;

   var resolW = +resolutionW;
   var resolH = +resolutionH;
   var DurComp = +durat;
   var FR = +frameR;

   NameComp = "TrSC_" + StroceElement + "-" + num;
     //@ts-ignore
   var newComp = app.project.items.addComp(NameComp, resolW, resolH, 1, DurComp, FR);
   newComp.openInViewer();

   newComp.openInViewer();



   newComp.parentFolder = ellFolder;

   ////////////////////////////////////////////////запускаем функции наполения композиций


      var nFunk = "contentRun_" + StroceElement;

      if (nFunk == "contentRun_Circle") {
         contentRun_C();
      }
      else if (nFunk == "contentRun_Polygon") {
         // contentRun_P();
      }
      else {
         return 'Composition not created';
      }



   function contentRun_C() {   //////////////Окружности
      //////////////////////////////////////////   Изинги
      var ease = +influ;
      var easeIn = new KeyframeEase(0, ease);
      var easeOut = new KeyframeEase(0, ease);
      // Присвиваем свойство Шай композиции.
       //@ts-ignore
      app.project.activeItem.hideShyLayers = true;
      var numShapeLaer = +countElement;;  //// Количество строков
      var LCap = 2; // Выбор характера края строка
        //@ts-ignore
      var w = newComp.width;
        //@ts-ignore
      var h = newComp.height;
        //@ts-ignore
      var a = newComp.pixelAspect;


      var valueStroke = Math.sqrt(Math.pow(h / 2, 2) + Math.pow(w / 2 * a, 2)) / numShapeLaer;

      /// Нулевой объект. Контроллер.
        //@ts-ignore
      var nullobjectC = newComp.layers.addNull();
      nullobjectC.source.name = ("Controll");
      nullobjectC.name = ("Controll");
      var controlCPath = ffxPath + "Animation_Control_C.ffx";
      var presetFile1 = new File(controlCPath);
      nullobjectC.applyPreset(presetFile1);
         //@ts-ignore
         newComp.layer("Controll")("ADBE Effect Parade")("Pseudo/ANIM _CONTROL_C")("Pseudo/ANIM _CONTROL_C-0012").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0ABOAbyCn0ABJCnAjzFjWjBjMjVjFBfACzChdhdCEEjzGjFjGjGjFjDjUDfRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeNiBjVjUjPhAiJjOjUjFjSjWjBjMffnndAbyFn0ABJFnAFd0EzAEByB\")'
         //@ts-ignore
         newComp.layer("Controll")("ADBE Effect Parade")("Pseudo/ANIM _CONTROL_C")("Pseudo/ANIM _CONTROL_C-0012").setValue(valueStroke * 2);
            //@ts-ignore
         newComp.layer("Controll")("ADBE Effect Parade")("Pseudo/ANIM _CONTROL_C")("Pseudo/ANIM _CONTROL_C-0013").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0ABOAbyCn0ABJCnAjzFjWjBjMjVjFBfACzChdhdCEEjzGjFjGjGjFjDjUDfRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeNiBjVjUjPhAiJjOjUjFjSjWjBjMffnndBbyFn0ABJFnAFd0EzAEByB\")'
            //@ts-ignore
         newComp.layer("Controll")("ADBE Effect Parade")("Pseudo/ANIM _CONTROL_C")("Pseudo/ANIM _CONTROL_C-0020").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0ABOAbyBn0ABJBnAFd0ACzChdhdBEEjzGjFjGjGjFjDjUCfRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeOiTjJjNjNjFjUjSjJjDiSjPjVjOjEffnndBbyDn0ABJDnAjzFjWjBjMjVjFDf0DzAEByB\")'
            //@ts-ignore
         newComp.layer("Controll")("ADBE Effect Parade")("Pseudo/ANIM _CONTROL_C")("Pseudo/ANIM _CONTROL_C-0026").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0ABOAbyBn0ABOBbyCn0ABJCnAFd0ACzChdhdBEEXzGjFjGjGjFjDjUCfEXzFjMjBjZjFjSDfjzIjUjIjJjTiDjPjNjQEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeMiJjOifiPjVjUhAiDjIjFjDjLffnndAbyEn0ABJEnAjzFjWjBjMjVjFFfACBEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeLiBjVjUjPhPiNjBjOjVjBjMffnndAbyIn0ABJInAjFf0DzAGByB\")'
         //@ts-ignore
         newComp.layer("Controll")("ADBE Effect Parade")("Pseudo/ANIM _CONTROL_C")("Pseudo/ANIM _CONTROL_C-0027").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0ABOAbyBn0ABOBbyCn0ABJCnAFdjEACzChdhdBEEXzGjFjGjGjFjDjUCfEXzFjMjBjZjFjSDfjzIjUjIjJjTiDjPjNjQEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeMiJjOifiPjVjUhAiDjIjFjDjLffnndBbyEn0ABJEnAjzFjWjBjMjVjFFfACBEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeLiBjVjUjPhPiNjBjOjVjBjMffnndAbyHn0ABJHnAjFf0DzAGByB\")'
         //@ts-ignore
         newComp.layer("Controll")("ADBE Effect Parade")("Pseudo/ANIM _CONTROL_C")("Pseudo/ANIM _CONTROL_C-0032").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0ABOAbyBn0ABJBnAFd0ACzChdhdBEEjzGjFjGjGjFjDjUCfRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeOiTjJjNjNjFjUjSjJjDiSjPjVjOjEffnndBbDn0ACJDnABjzBjYDfjzFjWjBjMjVjFEfnfJFnAEXzFjSjPjVjOjEFfjzEiNjBjUjIGfRBjDfff0DzAHByB\")'
         //@ts-ignore
      var tst = newComp.layer("Controll")("ADBE Effect Parade")("Pseudo/ANIM _CONTROL_C")("Pseudo/ANIM _CONTROL_C-0026");
      var tStartIn = 0;
      var tStartOut = (DurComp / 3);
      tst.setValuesAtTimes([tStartIn, tStartOut], [0, 100]);
      tst.setTemporalEaseAtKey(2, [easeIn]);
      tst.setTemporalEaseAtKey(1, [easeOut]);
      //@ts-ignore
      var ten = newComp.layer("Controll")("ADBE Effect Parade")("Pseudo/ANIM _CONTROL_C")("Pseudo/ANIM _CONTROL_C-0027");
      var tEndIn = (DurComp / 12 * 5);
      var tEndOut = (DurComp / 3 * 2);
      ten.setValuesAtTimes([tEndIn, tEndOut], [0, 100]);
      ten.setTemporalEaseAtKey(2, [easeIn]);
      ten.setTemporalEaseAtKey(1, [easeOut]);
      //@ts-ignore
      newComp.layer("Controll")("Effects")("ANIMATION _CONTROL_C")("Size").setValue(valueStroke);
      //@ts-ignore
      newComp.layer("Controll")("Effects")("ANIMATION _CONTROL_C")("Stroke").setValue(valueStroke);
      nullobjectC.enabled = false;
      // /// Нулевой объект. Контроллер по ValueAtTime.
         //@ts-ignore
      var nullobjectN = newComp.layers.addNull();
      nullobjectN.source.name = ("Nul");
      nullobjectN.name = ("Nul");
      var nullC = new File(ffxPath + "NulControll_C.ffx");
      nullobjectN.applyPreset(nullC);
      //@ts-ignore
      newComp.layer("Nul")("ADBE Effect Parade")("Pseudo/Nul_Contr_C")("Pseudo/Nul_Contr_C-0001").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0ACOAbyBn0ABJBnABjzBjOBfndAfACzChdhdCXzHjOjVjNiLjFjZjTDfEEXzGjFjGjGjFjDjUEfEXzFjMjBjZjFjSFfjzIjUjIjJjTiDjPjNjQGfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeMiJjOifiPjVjUhAiDjIjFjDjLffnndAbDn0ADJDnABjBfXzFjJjOjEjFjYHfEXzKjOjFjBjSjFjTjUiLjFjZIfEEXEfEXFfjGfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeMiJjOifiPjVjUhAiDjIjFjDjLffRBjzEjUjJjNjFJfffnfJEnABjzBjUKfXJfEXIfEEXEfEXFfjGfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeMiJjOifiPjVjUhAiDjIjFjDjLffRBjJfffnfOFbyGn0ABJGnABjBfCzBhNLjBfnndBnfACzBhcMjJfjKfnnnJKnABjzFjWjBjMjVjFNfjBfnf0DzAOByB\")'
      //@ts-ignore
      newComp.layer("Nul")("ADBE Effect Parade")("Pseudo/Nul_Contr_C")("Pseudo/Nul_Contr_C-0002").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0ABOAbyBn0ABJBnABjzBjUBfndAfACzBhcCEEjzGjFjGjGjFjDjUDfRBFeNiOjVjMiDjPjOjUjSjPjMjMifiDffRBFeGiOjVjNiLjFjZffnndBbyEn0ABJEnABjBfXzEjUjJjNjFEfEXzDjLjFjZFfEEXDfEXzFjMjBjZjFjSGfjzIjUjIjJjTiDjPjNjQHfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeMiJjOifiPjVjUhAiDjIjFjDjLffRBEEjDfRBFeNiOjVjMiDjPjOjUjSjPjMjMifiDffRBFeGiOjVjNiLjFjZffffnf0DzAIByB\")'
      //@ts-ignore
      newComp.layer("Nul")("ADBE Effect Parade")("Pseudo/Nul_Contr_C")("Pseudo/Nul_Contr_C-0003").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0ABOAbyBn0ABJBnABjzDjFjOjEBfCzBhKCCCCzBhNDjzEjUjJjNjFEfEEXzGjFjGjGjFjDjUFfEXzFjMjBjZjFjSGfjzIjUjIjJjTiDjPjNjQHfRBFeDiOjVjMffRBFeNiOjVjMiDjPjOjUjSjPjMjMifiDffRBFeHiUjJjNjFiLjFjZffnnnndKEEXFfEXGfjHfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeJiUjSjJjNiTjQjFjFjEffnnnfACzChdhdIEEXFfEXGfjHfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeMiJjOifiPjVjUhAiDjIjFjDjLffnndAbyEn0ABJEnAFdjE0DzAJByB\")'
      //@ts-ignore
      newComp.layer("Nul")("ADBE Effect Parade")("Pseudo/Nul_Contr_C")("Pseudo/Nul_Contr_C-0004").expression = CopyrightText_С + '\r\n\r\neval(\"@JSXBIN@ES@2.0@MyBbyBn0ABOAbBn0ACJBnABjzCiTjUBfCzBhKCCCCzBhNDjzEjUjJjNjFEfEEXzGjFjGjGjFjDjUFfEXzFjMjBjZjFjSGfjzIjUjIjJjTiDjPjNjQHfRBFeDiOjVjMffRBFeNiOjVjMiDjPjOjUjSjPjMjMifiDffRBFeHiUjJjNjFiLjFjZffnnnndKEEXFfEXGfjHfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeJiUjSjJjNiTjQjFjFjEffnnnfJCnAjBfACzChdhdIEEXFfEXGfjHfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeMiJjOifiPjVjUhAiDjIjFjDjLffnndBbyEn0ABJEnAFd0EzAJByB\")'
      
          //@ts-ignore
      app.project.activeItem.layer("Nul").shy = true;
      nullobjectN.enabled = false;
      nullobjectN.locked = false;
         //@ts-ignore
      var shapeLayer = newComp.layers.addShape();
      shapeLayer.name = ("TrCircle_1");
      var shapegroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group");
      var newshapeE = shapegroup.property("Contents").addProperty("ADBE Vector Shape - Ellipse");
      shapegroup.property("Material Options").enabled = false;
      newshapeE.property("ADBE Vector Ellipse Size").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0ABOAbCn0AEJCnABjzEiTjJjajFBfEEXzGjFjGjGjFjDjUCfEXzFjMjBjZjFjSDfjzIjUjIjJjTiDjPjNjQEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeEiTjJjajFffnfJDnABjzEiTjUjFjQFfCzBhNGCzBhLHCzBhKIEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeGiTjUjSjPjLjFffnndCEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeIiJjOjUjFjSjWjBjMffnnnndBnfJEnABjzEjUjFjNjQJfCHjBfCIjFfCGjzFjJjOjEjFjYKfnndBnnnnnfJFnAARCjJfjJffACzChdhdLEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeNiBjVjUjPhAiJjOjUjFjSjWjBjMffnndBbIn0AEJInABjBfEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeEiTjJjajFffnfJJnABjFfEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeEiTjUjFjQffnfJKnABjJfCHjBfCIjFfCGjKfnndBnnnnnfJLnAARCjJfjJff0DzAMByB\")'
      var newshapeS = shapegroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
      newshapeS.property("ADBE Vector Stroke Width").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@MyBbyBn0AKJAnABjzFjTjFjFjEiTBfEEXzGjFjGjGjFjDjUCfEXzFjMjBjZjFjSDfjzIjUjIjJjTiDjPjNjQEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeMiTjIjJjGjUiTjUjSiTjFjFjEffnfJBnABjzFiWjPjMiTiTFfEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFePiNjBjYiSjBjOjEiTjUjSiTjIjJjGjUffnfJCnABjzCjSjEGfCzBhLHjBfjzFjJjOjEjFjYIfnnnfJDnAEjzKjTjFjFjEiSjBjOjEjPjNJfRCjGfFctffJEnABjzGjTjMjJjEjFiTKfEjzGjSjBjOjEjPjNLfRCFdBjFfffnfbGn0ACJGnASzGjQjSjFjGjJjYMyBneJiUjSiDjJjSjDjMjFifftJHnASzDjOjVjNNyBndAftaIOJJKnATNyBBtACzChdhdOEXzGjTjVjCjTjUjSPfXzEjOjBjNjFQfEXDfjEfRBVzBjJRfyBffRCFdAXzGjMjFjOjHjUjISfVMfyBffVMfyBnnnAVRfyBBXzJjOjVjNiMjBjZjFjSjTTfjEfByBzChchdUJLnAVNfyBONbyPn0ABJPnASzDiJjOjEVyBCzBhNWjIfnndBnftACOEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeNiTjUjSjPjLjFiTiJjOjWjFjSjUffnndAbyTn0ABJTnASVyBCWVNfyBjIfnnnffOZbygan0ABJganAEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeGiTjUjSjPjLjFffACOEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeRiTjUjSjPjLjFiTjIjJjGjUifiPjOhPiPjGffnndAbgdn0ADJgdnABjzJiWjBjMiTjUjSjPjLjFXfEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeGiTjUjSjPjLjFffnfJgenABjzFiTjUjSiTjIYfEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeLiTjUjSjPjLjFiTjIjJjGjUffnfOgfbyhAn0ABJhAnAEXzLjWjBjMjVjFiBjUiUjJjNjFZfjXfRBCWjzEjUjJjNjFgafCzBhKgbCgbVVfyBXzNjGjSjBjNjFiEjVjSjBjUjJjPjOgcfjEfnnjYfnnnnffACOEEXCfEXDfjEfRBFeIiDjPjOjUjSjPjMjMffRBFeUiBiOiJiNiBiUiJiPiOhAifiDiPiOiUiSiPiMifiDffRBFeOiSjBjOjEjPjNiTjUjSiTjIjJjGjUffnndAbhDn0ACJhDnABjzIiTjUjSiTjIiSjOjEgdfjKfnfJhEnAEXZfjXfRBCWjgafCgbCgbVVfyBXgcfjEfnnjgdfnnnnffAER4C0AiAM40BiAV4D0AiAN4B0AiAAEAzAgeByB\")';
      newshapeS.property("ADBE Vector Stroke Line Cap").setValue(LCap);

      var newshapeT = shapegroup.property("Contents").addProperty("ADBE Vector Filter - Trim");
      newshapeT.property("ADBE Vector Trim Start").expression = CopyrightText_С + '\r\n\r\neval (\"@JSXBIN@ES@2.0@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\")';
      newshapeT.property("ADBE Vector Trim End").expression = CopyrightText_С + '\r\n\r\n\/\/\/\/\/TrimEnd\r\n\r\n\r\neval (\"@JSXBIN@ES@2.0@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\")';
      newshapeT.property("ADBE Vector Trim Offset").expression = CopyrightText_С + '\r\n\r\nvar prefix = \"TrCircle_\",\r\nnum=0; \r\nfor(var i=1;i<=thisComp.numLayers;i++) \r\nif(thisComp.layer(i).name.substr(0, prefix.length) == prefix)\r\nnum++; \r\nnum;\r\nif (thisComp.layer(\"Controll\").effect(\"ANIMATION _CONTROL_C\")(\"ShiftInvert\")==0) {\r\n\r\nInd =index-1\r\n\r\n} else {\r\n\r\nInd= num - index\r\n};\r\nShift = thisComp.layer(\"Controll\").effect(\"ANIMATION _CONTROL_C\")(\"Shift\");\r\n\r\n\r\n\/\/\/\/\r\nif (thisComp.layer(\"Controll\").effect(\"ANIMATION _CONTROL_C\")(\"Revers\")==1) {\r\n  rvs=-1\r\n} else {\r\nrvs=1 \r\n};\r\n\r\nif (thisComp.layer(\"Controll\").effect(\"ANIMATION _CONTROL_C\")(\"SimmetricRound\")==0) {\r\nseed=thisComp.layer(\"Controll\").effect(\"ANIMATION _CONTROL_C\")(\"Seed\")\r\nrnd=index+seed; \/\/ \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u0440\u0430\u043D\u0434\u043E\u043C\u043D\u043E\u0441\u0442\u0438\r\nseedRandom(rnd, true);\r\nslide=random(-350,350); \/\/\u0421\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0438\r\nofset = time*10*thisComp.layer(\"Controll\").effect(\"ANIMATION _CONTROL_C\")(\"OfsetSpeed\")*Math.pow(rvs,index)+slide;\r\n} \r\nelse {\r\nif (thisComp.layer(\"Controll\").effect(\"ANIMATION _CONTROL_C\")(\"In_Out Check\")==1) {\r\nTrS=thisLayer(\"ADBE Root Vectors Group\")(\"ADBE Vector Group\")(\"ADBE Vectors Group\")(\"ADBE Vector Filter - Trim\").start;\r\nTrS.valueAtTime(time-(Ind*Shift*thisComp.frameDuration));\r\nTrS*(-1.8)+thisComp.layer(\"Controll\").effect(\"ANIMATION _CONTROL_C\")(\"Angle_Ofset\");\r\n\r\n} else {\r\nTrE=thisLayer(\"ADBE Root Vectors Group\")(\"ADBE Vector Group\")(\"ADBE Vectors Group\")(\"ADBE Vector Filter - Trim\").end;\r\nTrE.valueAtTime(time-(Ind*Shift*thisComp.frameDuration));\r\nTrE*(-1.8)+thisComp.layer(\"Controll\").effect(\"ANIMATION _CONTROL_C\")(\"Angle_Ofset\")\r\n}\r\n}'
      ///   Присваиваем свойство шай слою.

      //@ts-ignore
      app.project.activeItem.layer("TrCircle_1").shy = true;
      /// Дезактивирую слой "TrStroke 1"
      //@ts-ignore
      app.project.activeItem.layer("TrCircle_1").selected = true;

      ///Копии  слоя.

      for (i = 1; i <= (numShapeLaer - 1); i++) {
         //@ts-ignore
         app.project.activeItem.layer("TrCircle_1").duplicate()
      }//@ts-ignore
      app.project.activeItem.layer("TrCircle_1").selected = false;



      /// Активизирую окно "Effect Controls"
      if (app.findMenuCommandId("Effect Controls")) { app.executeCommand(app.findMenuCommandId("Effect Controls")) }


      /// Активизирую слой "Controll" 
      //@ts-ignore
      app.project.activeItem.layer("Controll").selected = true;

      colorSetTS(colorArr);


   }
   app.endUndoGroup(); /// Отмена создания композиции.
};  