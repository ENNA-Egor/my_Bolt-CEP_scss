import React, {useEffect, useContext} from "react";
import Tab_circle from './Tab_circle/Tab_circle';
import Tab_polygon from './Tab_polygon';
import Tab_color from './TabColor/Tab_color';
import Tab_setting from './Settigs/Tab_setting';
import {readData} from '../../functionModule/function'
import { StartContext } from "../Context";

function Tabs() {
  const pathWriteEndReadContext: string =
      '/public/settingsData/dataContext.json';

      const {customData,startData, writeDataContext, readDataContext} = useContext (StartContext);

  useEffect(() => {
    let dataContext = readData(pathWriteEndReadContext);
      const dataStartContext:any = JSON.parse(dataContext);
      startData(dataStartContext)
      // writeDataContext( dataStartContext)
    }, []);

    useEffect(() => {
      setTimeout(writeDataContext, 10 , customData);
      }, [customData]);
    
  return (
     <div className="tabs-body">
       <Tab_circle />
       <Tab_polygon />
       <Tab_color />
       <Tab_setting />
     </div>
   );

}

export default Tabs;
