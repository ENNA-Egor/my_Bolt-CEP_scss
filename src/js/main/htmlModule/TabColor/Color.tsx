import React from "react";



const ColorPal = (props:any) => {

  const {color, replaceAndMinusColor, index} = props;
    return(
      <div>
         <div style ={{backgroundColor:color}} className= {'palette'}  onClick={replaceAndMinusColor} id={index}></div>
      </div>
    );
  };


  export default  ColorPal ;