import React from "react";
import Element from './element'

interface PropsInterface {
  palett: string;
}

function Palett(props: PropsInterface) {
  const { palett } = props;
  return (
    <div className="palet">
      Palette: { palett }
      <Element element={palett} />
    </div>
  );
}

export default Palett;