import React from "react";



const ColorPal = (props:any) => {

    return(
      <div>
         <div style ={{backgroundColor:props.color}} className= {'palette'}  onClick={props.replaceAndMinusColor} id={props.index}></div>
      </div>
    );
  };


  export default  ColorPal ;