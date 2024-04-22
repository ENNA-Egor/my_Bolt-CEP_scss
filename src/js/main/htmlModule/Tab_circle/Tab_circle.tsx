import React  from "react";
import {os, path, fs} from "../../../lib/cep/node"
import {
   csi,
   evalES,
   evalFile,
   openLinkInBrowser,
   subscribeBackgroundColor,
   evalTS,
 } from "../../../lib/utils/bolt";
import { render } from "react-dom";



class  Tab_circle extends React.Component{

    // const text: string = 'CreateCircle';
    // createCircle = ()=>{
    //     evalTS("createCircleTS", {text: this.Text}).then((res) => {

    //     });
    //    };

render(): React.ReactNode {
    
    return(
        <div className="tab-circle tab-b hide">
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
    );
}

 }




export default Tab_circle;