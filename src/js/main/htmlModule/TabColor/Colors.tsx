import React from "react";
import ColorPal from "./Color";



function Colors  (props: any) {

   return (
     <div className="blok_palet">
           {
             props.colors.map(color => (
              <ColorPal color={color}/>
             ))
           }
         
       </div>   
     );
//  }
};

 export default Colors;