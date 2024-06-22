import {  useContext } from "react";

import {hexToRgb} from '../../../js/functionModule/function'
import { PaletteContext } from '../PalettContext';
import Palets from "./palets";


interface ColorData {
  id:number
  name: string;
  group: string;
  colors: string[];
}


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

    const groupedData: { [key: string]: ColorData[] } = {};

    COLORS_PALLETE.forEach(item => {
      const group = item.group;
      if (groupedData[group]) {
        groupedData[group].push(item);
      } else {
        groupedData[group] = [item];
      }
    });
    
    // console.log(groupedData);

    for (const groupName in groupedData) {
      console.log( groupName);
      groupedData[groupName].forEach(item => {
        // console.log(item.name);
        // console.log([item.id],);
      });
    }

    return (
      <div>
        {Object.entries(groupedData).map(([groupName, groupItems]) => (
          <div key={groupName}>
            <div className="blok_group  stic">"{groupName}"</div>
            {groupItems.map((item, id) => (
              <div key={id}>
                <div className="blok_group_group">"{item.name}"</div>
                <div className="blok_palet2">
                {item.colors.map((hexColor, index) => (
                <div 
                  key={index} 
                  className={'palette2'} 
                  style={{ backgroundColor: hexToRgb(hexColor) }}
                ></div>
              ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  // return Object.keys(groupedData).map((key) => {
  //   const value = groupedData[key];
        // console.log(key);
        // console.log(value[0].name);
        // console.log(value[0].colors);
        // value.forEach(item => {
        //   console.log(item.name);
        // }); 

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
          // return (
          //   <div key={key}>
          //     <h1 className="blok_group stic ">{key}</h1>
          //     <div className="blok_group_group">{value[2].name}</div>
          //     {/* < Palets/> */}
          //   </div>
          // )
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
    // });
  }
  
  

  
  
  function PalettList  (props:any) {
    return <div className="blok_palet2">{renderPalett(props.palets)}
    </div>;

  };


  export default  PalettList;