import React, {useContext}  from "react";
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
// import {} from '../../Context';
import {StartContext} from '../../Context';



function  Tab_circle(){

    const {customData ={},} = useContext (StartContext);
    const  patFfx = path.join(__dirname, '/public/ffx/');

    function createCircle  (){
        evalTS("createCircleTS", "Circle", customData, patFfx).then((res) => {
        });
       };


       function  butCap  (){
        evalTS("butCapTS",  "TrCircle", 1, "TrSC_Circle").then((res) => {
        });
       };

       function  roundCap  (){
        evalTS("roundCapTS",  "TrCircle", 2, "TrSC_Circle").then((res) => {
        });
       };

       function plusEl  (){
        evalTS("plusElTS", "TrCircle",  "TrSC_Circle").then((res) => {
        });
       };

       function  minusEl  (){
        evalTS("minusElTS", "TrCircle", "TrSC_Circle").then((res) => {
        });
       };


// render(): React.ReactNode {
    
    return(
        <div className="tab-circle tab-b hide">
        <fieldset className="field">
        <legend>Circle</legend>
            <div className="circle-blok">
                <div className="button buttonC" onClick={createCircle}>Create</div>
            </div>  
            <p>Cap</p>
            <div className="linecap_blok" >
                <div className="button button_cap  but" onClick={butCap}></div>
                <div className="button button_cap round"  onClick={roundCap}></div>
            </div> 
            <p>Add/End</p>
            <div className="add_end_blok" >
                <div className="button button_plus" onClick={plusEl}></div>
                <div className="button button_minus" onClick={minusEl}></div>
            </div>
        </fieldset>   
    </div>   
    );
// }

 }




export default Tab_circle;