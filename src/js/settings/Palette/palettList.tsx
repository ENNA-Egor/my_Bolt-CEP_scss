import {  useContext } from "react";

import {hexToRgb} from '../../../js/functionModule/function'
import { PaletteContext } from '../PalettContext';


function renderPalett(COLORS_PALLETE: any) {
  const {removeGroup, fixetGroup, appGroupIn}=  useContext(PaletteContext);
  
  const delEndAppOn = (e:any)=>{
    let nameTar:string = e.target.id;
    if (e.ctrlKey) {
      switch (nameTar) {
          case 'Standart':
          case 'Start':
          case 'Bright':
          case 'Arbitrary':
            fixetGroup();
            break;
          default:
            removeGroup( [e.target.id]  );
            break;
        }
    } else {
      appGroupIn( [e.target.id] );
    }
    }

    const groupedData = {};

    COLORS_PALLETE.forEach(item => {
      const group = item.group;
      if (groupedData[group]) {
        groupedData[group].push(item);
      } else {
        groupedData[group] = [item];
      }
    });
    
    // console.log(groupedData);

  return Object.keys(groupedData).map((key) => {
    const value = groupedData[key];
        console.log(key);
        console.log(value);

    // for (const groupName in groupedData) {
    //   // console.log(groupName);
        // value.forEach(item => {
        // console.log(item.name);
        // console.log([${item.colors.join(", ")}],);
      // });
    // }
    // console.log(value)
    // if (typeof value === "object") {
      // if (key==('Custom')){
        // return (
        //   <div key={value}>
        //       <h1 className="blok_group  stic">{value}</h1>
        //       <div className="blok_palet2">{renderPalett(value)}</div>
        //     </div>
        //   )
      //   } else if (key==('Default')){
          return (
            <div key={key}>
              <h1 className="blok_group stic ">{key}</h1>
              {/* <div className="blok_palet2">{renderPalett(value)}</div> */}
            </div>
          )
      //   }
      //   else {
      //     return (
      //       <div key={key}>
      //         <h1 className="blok_group_group" onClick={delEndAppOn} id={key}>{key}</h1>
      //         <div className="blok_palet2">{renderPalett(value)}</div>
      //       </div>
      //     );
      //   }
        
      // } else {
      //   const colorToRgb = hexToRgb(value);
      //   return <div key={key} className= {'palette2'} style ={{backgroundColor:colorToRgb}}></div>;
      // }
    });
  }
  
  

  
  
  function PalettList  (props:any) {
    return <div className="blok_palet">{renderPalett(props.palets)}</div>;
  };


  export default  PalettList;