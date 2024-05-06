import React, { createContext, useState} from "react";
import {writeData} from '../functionModule/function'

export const StartContext = createContext<any>(0);

export  const Context = (props) => {
    const [customData, setCustomData] = useState(
        {
            checkColorpicer : true,
            colors:[],
            oldColor:"",
            autoFill: false,
            num_element:null,
            resolution_w:null,
            resolution_h:null,
            framerate:null,
            duration:null,
            influence:null,
            durLock:false, 
            loading: true,
            num_points: null,
        }
    );
    const changeInput = (targetName:string, targetValue:number) => {
        setCustomData((prevState) =>{
            return {
            ...prevState,
            [targetName] : +targetValue,
            };
        });
     };

     const handleCheckboxChange = (targetName:string, targetChecked:boolean) => {
        setCustomData((prevState) =>{
            return {
            ...prevState,
            [targetName] : targetChecked,
            };
        });
     };

     const customSetting = (resol_w, resol_h, fr_r, dur) =>{
        setCustomData((prevState) =>{
            return {
            ...prevState,
            resolution_w : resol_w,
            resolution_h : resol_h,
            framerate : fr_r,
            duration : dur,
            };
        });
     }


     const customColorSettings = (oldcolor, palColor) =>{
        setCustomData((prevState) =>{
            return {
            ...prevState,
            oldColor : oldcolor,
            colors : palColor,
            };
        });
     }

     const startData = (stateData)=> {
        setCustomData ((prevState) =>{
            return {
            ...prevState,
            checkColorpicer : stateData.checkColorpicer,
            colors:stateData.colors,
            oldColor:stateData.oldColor,
            autoFill: stateData.autoFill,
            num_element:stateData.num_element,
            resolution_w:stateData.resolution_w,
            resolution_h:stateData.resolution_h,
            framerate:stateData.framerate,
            duration:stateData.duration,
            influence:stateData.influence,
            durLock:stateData.durLock, 
            loading: stateData.loading,
            num_points:stateData.num_points,
            };
        });
    }
    
    const pathWriteEndReadContext: string =
      '/public/settingsData/dataContext.json';

      const writeDataContext =(dataStartContext )=>  {
            writeData(dataStartContext, pathWriteEndReadContext )
      }

        const valueData ={
            customData,
            changeInput,
            startData,
            writeDataContext,
            handleCheckboxChange,
            customSetting,
            customColorSettings,
        }

            return <StartContext.Provider value={valueData}>
                {props.children}
            </StartContext.Provider>
    
}