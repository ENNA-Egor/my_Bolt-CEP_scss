
import React from "react";

 function Tabs(){
    return (
    <div className="tabs-body">
        <div className="tab-circle tab-b">
            <fieldset className="field">
            <legend>Circle</legend>
                <div className="circle-blok">
                    <div className="button buttonC">Create</div>
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
    </div> 
        );
     }  

     export default Tabs;
