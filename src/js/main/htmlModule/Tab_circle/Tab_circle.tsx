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
import {} from '../../Context';
import {StartContext} from '../../Context';



function  Tab_circle(){

    const {customData ={},} = useContext (StartContext);

    function createCircle  (){
        evalTS("createCircleTS", "createCircle").then((res) => {
        });
       };


       function  butCap  (){
        evalTS("butCapTS", "butCap").then((res) => {
        });
       };

       function  roundCap  (){
        evalTS("roundCapTS", "roundCap").then((res) => {
        });
       };

       function plusEl  (){
        evalTS("plusElTS", "plusEl").then((res) => {
        });
       };

       function  minusEl  (){
        evalTS("minusElTS", "minusEl").then((res) => {
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