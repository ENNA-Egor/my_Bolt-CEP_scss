import {  useContext } from "react";

import {hexToRgb} from '../../../js/functionModule/function'
import { PaletteContext } from '../PalettContext';


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

    for (const groupName in groupedData) {
      console.log( groupName);
      groupedData[groupName].forEach(item => {
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
  }
  
  
  function PalettList  (props:any) {
    return <div className="blok_palet2">{renderPalett(props.palets)}
    </div>;

  };


  export default  PalettList;