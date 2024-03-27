import React from "react";
import ColorPal from "./Color";



const Colors = ()=> {
  
  const colorArr: Array <string>= ["red","rgb(115, 209, 60)","white","yellow","1f8a70","bedb39","green","7f7fff","c1faec","d5e390","628f2e","14dcdc","fafa98","1f8a70","red"];
  return (
    <div className="blok_palet">
          {
            colorArr.map(color => {
              console.log (color)
              return  <ColorPal color={color}/>
            })
          }
        
      </div>   
    );
};

 export default Colors;