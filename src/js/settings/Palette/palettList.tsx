import {hexToRgb} from '../../../js/functionModule/function'


function renderPalett(COLORS_PALLETE: any) {
    return Object.keys(COLORS_PALLETE).map((key) => {
      const value = COLORS_PALLETE[key];
      if (typeof value === "object") {
        return (
          <div key={key}>
            <h1>{key}</h1>
            <div className="blok_palet2">{renderPalett(value)}</div>
          </div>
        );
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