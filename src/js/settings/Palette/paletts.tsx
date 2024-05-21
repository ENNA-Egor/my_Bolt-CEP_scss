import Palett from "./Palett";



function Paletts  (props: any) {
//   let index =0;
  const {paletts} = props;
   return (
     <div className="blok_palet">
           {/* {
             colors.map(color => (
              <Palett color={color}
              index = {index++}
              key = {index}
              replaceAndMinusColor ={replaceAndMinusColor}/>
             ))
           } */}
           <Palett palett = {paletts}/>
         
       </div>   
     );
//  }
};

 export default Paletts;