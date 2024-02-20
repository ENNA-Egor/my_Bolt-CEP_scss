function Tab_polygon(){
    return(
        <div className="tab-polygon tab-b  hide">
        <fieldset className="field">
           <legend>Polygon</legend>
           <div className="polygon-blok point-blok">
           <p className="n_points">Number Points</p>
           <input type="text" className="n_points  inp" name="num_points" min="3" max="15" value="5"/>
           </div>
           <div className="polygon-blok">
              <div className="button buttonP">Create</div>
           </div>  
           <p>Cap</p>
           <div className="linecap_blok" >
              <div className="button button_cap  but"></div>
              <div className="button button_cap round"></div>
           </div> 
           <p>Add/End</p>
           <div className="add_end_blok" >
              <div className="button button_plus"></div>
              <div className="button button_minus"></div>
           </div>
        </fieldset>
     </div>
    );
 }




export default Tab_polygon;