import React from "react";

// const divStyle ={}

const ColorPal = (props:any) => {

    return(
      <div>
         <div style ={{backgroundColor:props.color}} className= {'palette'} ></div>
      </div>
    );
  };


  export default  ColorPal ;