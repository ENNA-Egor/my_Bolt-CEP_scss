import Palett from "./Palett";



function Paletts  (props: any) {
//   let index =0;
  const {paletts} = props;
  // let num: number = Object.keys(paletts).length;
   return (
     <div className="blok_palet">
          
           <Palett palett = {paletts} />
           
           </div>   

     );
//  }
};

 export default Paletts;