
import {
  customSettingsTS,
} from "./functionTabSetting";

export {customSettingsTS };


import {
  replaceColorTS,
} from "./functionTabColor";

export {replaceColorTS};

import {
  plusPalTS,
} from "./functionTabColor";

export {plusPalTS};

import {numberStroke,} from './functionTabColor'
import {layerRang} from './functionTabColor'
import {add_color_shape} from './functionTabColorSett'





export const helloWorld = (color) => {
  alert("Hellooo from After Effects!");
  var prefLayer: string = "";
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

            alert(prefLayer);

            var numStr: number = numberStroke(prefLayer, newComp);
             layerRang (numStr, prefLayer, newComp);
     }
     add_color_shape(color);
};




