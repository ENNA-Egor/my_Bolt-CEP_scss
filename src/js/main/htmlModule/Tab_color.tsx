import {
   csi,
   evalES,
   evalFile,
   openLinkInBrowser,
   subscribeBackgroundColor,
   evalTS,
 } from "../../lib/utils/bolt";


function Tab_color(){

   function proba(){
      alert('Ok');
   }
   function openPanel(){
      csi.requestOpenExtension('com.Bolt-CEP_Test.cep.settings',0);
   }

    return(
     <div className="bloc_palets tab-color tab-b">
     <fieldset className="field">
        <legend>Color</legend>
        <div className="colorP">
        <p>ColorPicker_AE</p>
        <input type="checkbox" checked className="n_points  check" name="check_color_pick"/>
        </div>
        <div className="blok_palet">
        <div className="palette pal_1" id="color1">1</div>
        <div className="palette pal_2">2</div>
        <div className="palette pal_3">3</div>
        <div className="palette pal_4">4</div>
        <div className="palette pal_5">5</div>
        <div className="palette pal_6">6</div>
        <div className="palette pal_7">7</div>
        <div className="palette pal_8">8</div>
        <div className="palette pal_9">9</div>
        <div className="palette pal_10">10</div>
        <div className="palette pal_11">11</div>
        <div className="palette pal_12">12</div>
        <div className="palette pal_13">13</div>
        <div className="palette pal_14">14</div>
        <div className="palette pal_15">15</div>
        </div>
        <div className="buttons">
           <div className="button bt1 disableElement" id="btnPlus"></div>
           <div className="button bt2" id="btnMinus"></div>
           <div className="button bt3" id="btnApp">App</div>
           <div className="button bt4" id="btn_reset">Res</div>
        </div>
        <div className="buttons">
           <div onClick={proba} className="button bt5" >Save</div>
           <div onClick={openPanel} className="button bt6">ColorPal</div>
        </div>
   </fieldset>
  </div>
    );
 }





export default Tab_color;