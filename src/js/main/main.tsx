import { useEffect, useState } from "react";
import { os, path } from "../lib/cep/node";
import {
  csi,
  evalES,
  evalFile,
  openLinkInBrowser,
  subscribeBackgroundColor,
  evalTS,
} from "../lib/utils/bolt";

// import bolt from "../assets/bolt-cep.svg";
import circle from "../assets/png/Circle-01.png";
import polygon from "../assets/png/Polygon-01.png";
import color from "../assets/png/Color.png";
import setting from "../assets/png/Help.png";


// import "../main/scss/main.css";
import "../main/scss/main.scss";

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
