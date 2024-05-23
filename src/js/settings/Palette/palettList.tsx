import {hexToRgb} from '../../../js/functionModule/function'


function renderPalett(COLORS_PALLETE: any) {
    return Object.keys(COLORS_PALLETE).map((key) => {
      const value = COLORS_PALLETE[key];
      if (typeof value === "object") {
        if (key==('Custom')){
          return (
            <div key={key}>
              <h1 className="blok_group">{key}</h1>
              <div className="blok_palet2">{renderPalett(value)}</div>
            </div>
          )
        } else if (key==('Default')){
          return (
            <div key={key}>
              <h1 className="blok_group">{key}</h1>
              <div className="blok_palet2">{renderPalett(value)}</div>
            </div>
          )
        }
         else {
          return (
            <div key={key}>
              <h1 className="blok_group_group">{key}</h1>
              <div className="blok_palet2">{renderPalett(value)}</div>
            </div>
          );
        }
        
      } else {
        const colorToRgb = hexToRgb(value);
        return <div key={key} className= {'palette2'} style ={{backgroundColor:colorToRgb}}></div>;
      }
    });
  }




function PalettList  (props:any) {
    return <div className="blok_palet">{renderPalett(props.palets)}</div>;
  };


  export default  PalettList;