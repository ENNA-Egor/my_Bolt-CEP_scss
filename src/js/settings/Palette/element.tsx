function Element(props: { element: string }) {
  return (
    <div className="palet">
      Palette: { props.element }
      {/* <h5>{props.element}</h5> */}
    </div>
  );
}

export default Element;