export const createContent = (startText:string, param:string, dataCreate:any) => {
 

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
// var ffxPath =;
var colorArr = dataCreate.colors;
var numPoint = dataCreate.num_points;

function CreateOne() {
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

    }
};  