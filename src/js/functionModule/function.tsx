import React from "react";
import {path, fs} from "../../js/lib/cep/node";

function hexToRgb(hex){  
   if (typeof hex === 'string') hex = parseInt(hex, 16);  
   var r = (hex >> 16) & 0xFF;  
   var g = (hex >> 8 ) & 0xFF;  
   var b = (hex >> 0 ) & 0xFF;  
   return 'rgb'+ '('+r+',' +g+','+ b +')';  
  }

//  


  export default hexToRgb;
//   export default writeColorData;