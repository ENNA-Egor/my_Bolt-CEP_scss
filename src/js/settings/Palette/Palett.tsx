import React from "react";
import Element from './element'



function Palett(props: any) {
  const { palett } = props;
  alert(Object.keys(palett));
  return (
    <div className="palet">
      <p>{Object.keys(palett)}</p>   
 {
   Object.keys(palett).map(palet =>( 
     <Element palet={palett} />
    ))
  }
    </div>
  );
}

export default Palett;