import React from "react";
import {hexToRgb} from '../../../functionModule/function'


const ColorPal = (props:any) => {

  const {color, replaceAndMinusColor, index} = props;
  const colorToRgb = hexToRgb(color);
    return(
      <div>
         <div style ={{backgroundColor:colorToRgb}} className= {'palette'}  onClick={replaceAndMinusColor} id={index}></div>
      </div>
    );
  };


  export default  ColorPal ;