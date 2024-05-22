function renderPalett(COLORS_PALLETE: any) {
    return Object.keys(COLORS_PALLETE).map((key) => {
      const value = COLORS_PALLETE[key];
      if (typeof value === "object") {
        return (
          <div key={key}>
            <h1>{key}</h1>
            <ul>{renderPalett(value)}</ul>
          </div>
        );
      } else {
        return <li key={key} className= {'palette'} style ={{backgroundColor:value}}>{value}</li>;
      }
    });
  }




function PalettList  (props:any) {
    return <ul>{renderPalett(props.palets)}</ul>;
  };


  export default  PalettList;