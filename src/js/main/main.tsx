import { HtmlHTMLAttributes, useEffect, useState } from "react";
import {
  subscribeBackgroundColor,
} from "../lib/utils/bolt";
import { Preloader } from '../main/htmlModule/TabColor/Preloader';
import circle from "../assets/png/Circle-01.png";
import polygon from "../assets/png/Polygon-01.png";
import color from "../assets/png/Color.png";
import setting from "../assets/png/Help.png";

const Main = () => {
  const [bgColor, setBgColor] = useState("#282c34");
  
  useEffect(() => {
    if (window.cep) {
      subscribeBackgroundColor(setBgColor);
    }
  }, []);



  function activeButt (event: any){
    let evValue = (event.target.className).slice(0,5);
    if (evValue =='tab-h') {
      let dataTab = event.target.getAttribute('data-tab');
      let tabH = document.getElementsByClassName('tab-h');
      for (let i = 0; i < tabH.length; i++) {
        tabH[i].classList.remove('active');
      }
      event.target.classList.add('active');
      var tabBody = document.getElementsByClassName('tab-b');
      for (var i = 0; i < tabBody.length; i++) {
        if (dataTab == i) {
          tabBody[i].classList.remove('hide');
          tabBody[i].classList.add('visible');
        } else {
          tabBody[i].classList.remove('visible');
          tabBody[i].classList.add('hide');
        }
      }
    }
  
};

  return (
       <div className="app" >
        <Preloader/>
         <div className="tabs-head">
            <div className="tab-h tab-c" data-tab ="0" onClick={activeButt}>
            </div>
          </div>
          <div className="tabs-head">
            <div className="tab-h tab-p" data-tab ="1" onClick={activeButt}>
            </div>
          </div>
          <div className="tabs-head ">
            <div className="tab-h tab-col active" data-tab ="2" onClick={activeButt}>
            </div>
          </div>
          <div className="tabs-head">
            <div className="tab-h tab-s" data-tab ="3" onClick={activeButt}>
            </div>
          </div>
     </div> 
  );
};

export default Main;
