import React from "react";
// import {hexToRgb} from '../../../functionModule/function'


const Palett = (props:any) => {

  const {palett} = props;
//   const colorToRgb = hexToRgb(color);
    const text:any = palett;
    return(
      <div >
         {/* <div style ={{backgroundColor:colorToRgb}} className= {'palette'}  onClick={replaceAndMinusColor} id={index}></div> */}
         Palette + {text}
      </div>
    );
  };


  export default  Palett ;