import React from "react";
import Element from './element'


function Palett  (props:any) {

  const {palett} = props;
//   const colorToRgb = hexToRgb(color);
    const text:any = palett;
    return(
      <div className="palet">
         {/* <div style ={{backgroundColor:colorToRgb}} className= {'palette'}  onClick={replaceAndMinusColor} id={index}></div> */}
         Palette + {text}
         <Element element = {'Proba'}/>
         {/* <Element/> */}
      </div>
    );
  };


  export default  Palett ;