// import React, {} from "react";
import Tab_circle from './Tab_circle/Tab_circle';
import Tab_polygon from './Tab_polygon';
import Tab_color from './TabColor/Tab_color';
import Tab_setting from './Settigs/Tab_setting';
import { Context } from '../Context';

function Tabs() {
  return <Context>
    (
     <div className="tabs-body">
       <Tab_circle />
       <Tab_polygon />
       <Tab_color />
       <Tab_setting />
     </div>
   );
  </Context>

}

export default Tabs;
