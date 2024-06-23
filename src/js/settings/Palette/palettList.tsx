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
  
  function delEndAppOn(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement; 
    const keyValue = target.getAttribute('data-key'); 
    if (event.ctrlKey) {
      // alert('Remove');
      alert(keyValue);
      console.log(keyValue);
      //   switch (nameTar) {
        //       case 'Standart':
        //       case 'Start':
        //       case 'Bright':
        //       case 'Arbitrary':
        //         fixetGroup();
        //         break;
        //       default:
        // removeGroup( [e.target.id]  );
        // break;
        // }
      } else {
      alert('App');
      // appGroupIn( [e.target.id] );
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
      // console.log( groupName);
      groupedData[groupName].forEach(item => {
      });
    }

    return (
      <div>
        {Object.entries(groupedData).map(([groupName, groupItems]) => (
          <div key={groupName}>
            <div className="blok_group  stic">{groupName}</div>
            {groupItems.map((item, id) => (
              <div key={item.id}>{+item.id}
                <div className="blok_group_group" onClick={delEndAppOn} data-key={+item.id}>{item.name}</div>
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