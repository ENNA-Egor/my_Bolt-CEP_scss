import React from "react";
import ColorPal from "./Color";



const Colors = ()=> {
  
  const colorArr: Array <string>= ["red","rgb(115, 209, 60)","white","yellow","1f8a70","bedb39","ffff1a","7f7fff","c1faec","d5e390","628f2e","14dcdc","fafa98","1f8a70","bedb39"];
 console.log (String(colorArr[0]))
  return (
        <div className="blok_palet">
        <ColorPal color={colorArr[0]}/>
        <ColorPal color={colorArr[1]}/>
        <ColorPal color={colorArr[2]}/>
        <ColorPal color={colorArr[3]}/>
        <ColorPal color='rgb(115, 209, 60)'/>
        <ColorPal color='red'/>
        <ColorPal color='blue'/>
        <ColorPal color='green'/>
        <ColorPal color='aquamarine'/>
        <ColorPal color='rgb(115, 209, 60)'/>
        <ColorPal color='red'/>
        <ColorPal color='blue'/>
        <ColorPal color='green'/>
        <ColorPal color='aquamarine'/>
        <ColorPal color='rgb(115, 209, 60)'/>
        {
          // colorArr.map(color => {
          //   return <Color {color}
          // })
        }
      </div>   
    );
};

 export default Colors;