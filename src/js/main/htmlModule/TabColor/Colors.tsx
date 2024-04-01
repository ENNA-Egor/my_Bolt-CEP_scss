import ColorPal from "./Color";



function Colors  (props: any) {
  let index =0;
  const {colors, replaceAndMinusColor} = props;
   return (
     <div className="blok_palet">
           {
             colors.map(color => (
              <ColorPal color={color}
              index = {index++}
              key = {index}
              replaceAndMinusColor ={replaceAndMinusColor}/>
             ))
           }
         
       </div>   
     );
//  }
};

 export default Colors;