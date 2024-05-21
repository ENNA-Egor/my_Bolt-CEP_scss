function Element(props:any) {
  const { palet } = props;
  return (
    <div className="palet">
      Palette- { palet. Default.Яркий}
      {/* <h5>{props.element}</h5> */}
    </div>
  );
}

export default Element;