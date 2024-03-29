import ColorPal from "./Color";



function Colors  (props: any) {
  let index =0;
   return (
     <div className="blok_palet">
           {
             props.colors.map(color => (
              <ColorPal color={color}
              index = {index++}
              replaceAndMinusColor ={props.replaceAndMinusColor}/>
             ))
           }
         
       </div>   
     );
//  }
};

 export default Colors;