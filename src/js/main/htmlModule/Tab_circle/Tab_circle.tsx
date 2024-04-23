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


    createCircle = ()=>{
        evalTS("createCircleTS", "createCircle").then((res) => {
        });
       };


    butCap = ()=>{
        evalTS("butCapTS", "butCap").then((res) => {
        });
       };

    roundCap = ()=>{
        evalTS("roundCapTS", "roundCap").then((res) => {
        });
       };

    plusEl = ()=>{
        evalTS("plusElTS", "plusEl").then((res) => {
        });
       };

    minusEl = ()=>{
        evalTS("minusElTS", "minusEl").then((res) => {
        });
       };


render(): React.ReactNode {
    
    return(
        <div className="tab-circle tab-b hide">
        <fieldset className="field">
        <legend>Circle</legend>
            <div className="circle-blok">
                <div className="button buttonC" onClick={this.createCircle}>Create</div>
            </div>  
            <p>Cap</p>
            <div className="linecap_blok" >
                <div className="button button_cap  but" onClick={this.butCap}></div>
                <div className="button button_cap round"  onClick={this.roundCap}></div>
            </div> 
            <p>Add/End</p>
            <div className="add_end_blok" >
                <div className="button button_plus" onClick={this.plusEl}></div>
                <div className="button button_minus" onClick={this.minusEl}></div>
            </div>
        </fieldset>   
    </div>   
    );
}

 }




export default Tab_circle;