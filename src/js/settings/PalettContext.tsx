import React, { createContext, useState } from "react";
import {writeData} from '../../js/functionModule/function'

export const PaletteContext = createContext<any>(0);


export const Context = (props) => {
    const [customPalett, setCustomPalett] = useState(
        [

        {  
            id: 1,
             name:  "Standart",
            group: "Default",
            colors: [ "5b82b3", "86cab9","d5e390","fafa98","fabb86","9a9afa","c9b1f4","91a679","c1faec","ba8db6"]
        },
        {   id: 2,
            name:  "Start",
            group: "Default",
            colors: [ "004358", "1f8a70","bedb39","ffff1a","7f7fff"]
        },
            
        {   id: 3,
            name:  "Bright",
            group: "Default",
            colors:[ "7f44eb","628f2e","92fce3", "ff00ff" ]
        }, 
        {   
            id: 4,
            name:  "Arbitrary",
            group: "Custom",
            colors: ["2f6b6b","2f5151","104646","6cb7b7","80b7b7","7f7fff","c1faec","ba8db6", "7f44eb","004358","ffff1a","1f8a70","bedb39","ffff1a","7f7fff"]
        }, 
        {   id: 5,
            name:  "Glow",
            group: "Main",
            colors:[ "9a9afa", "c9b1f4","91a679"]
        },
        {   id: 6,
            name:  "Gold",
            group: "Custom",
            colors:[ "5b82b3", "86cab9","d5e390","fafa98","c1faec"]
        },
        {   id: 7,
            name:  "New_6",
            group: "Main",
            colors:[ "d5e390","628f2e","14dcdc","fafa98","1f8a70","bedb39","ffff1a","7f7fff","c1faec","d5e390","628f2e","14dcdc","fafa98","1f8a70","bedb39"]
        },
        {   id: 8,
            name:  "Start2",
            group: "Main",
            colors: [ "7f44eb","628f2e","92fce3"]
        },
        {   id: 9,
            name:  "monocromRed",
            group: "Custom",
            colors:["fbc9c9","fb9797","fb6464", "fb3232","fb0000"]
        },
        {   id: 10,
            name:  "New",
            group: "Main",
            colors:[ "5b82b3","86cab9","d5e390","fafa98","fabb86"]
        }
    ]
        
    )
    
    
    const removeGroup = (targetName: number) => {
        // console.log(customPalett[targetName]);
        let updatedCustomPalett = [...customPalett] ;
        console.log(customPalett);
        // console.log(targetName);
        // indexObj(targetName)
        
        ///////////////

        
        function indexObj(AObj) {
            for (var i = 0; i < customPalett.length; i++) {
                if (customPalett[i].id == AObj.id)
                return i;
            }
            return -1;
          }
    indexObj({id: targetName});
    const arrIndex = indexObj({id: targetName});
    console.log(arrIndex);

        //////////////////////////////
        // const newColors = updatedCustomPalett.map((elem) => {
            // console.log(elem.id);
            // if (elem.id ===targetName){
            //     alert( 'delete element' + targetName);
            // }
        // });
        // const newColors = updatedCustomPalett;
        let newArr =updatedCustomPalett.splice(arrIndex, 1);
        console.log(updatedCustomPalett);
        setCustomPalett(updatedCustomPalett);
        // setCustomPalett((prevState) => {
        //     return {
        //         ...prevState,
        //         newArr,
        //     };
        // });

        // updatedCustomPalett['colorsPal'].map((elem)=>{
        //     if(elem.id === targetName ){
        //         console.log(elem);
        //     }
        // })
        // const pathWriteColorContext: string = customPalett.pathWriteContextColor;
        //    delete updatedCustomPalett['colorsPal'][targetName],
        //    setCustomPalett(updatedCustomPalett);
        //    writeColorContext(updatedCustomPalett, pathWriteColorContext);
    };
    const appGroupIn = (targetName: string) => {
            Object.keys(customPalett).map((key) => {
                const value = customPalett[key];
                if(value[targetName] !== undefined){
                    alert(value[targetName]);
                }
            })
    };

    const fixetGroup = () => {
            alert('This group cannot be edited');
    };


    // const pathWriteColorContext: string =
    //     '/public/settingsData/colorsPalett.json';

    const startColors = (stateData) => {
        alert(stateData.Standart);
        setCustomPalett((prevState) => {
            return {
                ...prevState,
                // pathWriteContextData: stateData.pathWriteContextData,
                pathWriteContextColor: '',
                oldColor: stateData.oldColor,
                autoFill: stateData.autoFill,
                num_element: stateData.num_element,
                resolution_w: stateData.resolution_w,
                resolution_h: stateData.resolution_h,
                framerate: stateData.framerate,
                duration: stateData.duration,
                influence: stateData.influence,
                durLock: stateData.durLock,
                loading: stateData.loading,
                num_points: stateData.num_points,
            };
        });
    }


    const writeColorContext = (newPalett, pathWrite) => {
        writeData(newPalett, pathWrite)
    }

    const valueData = {
        customPalett,
        removeGroup,
        fixetGroup,
        appGroupIn,
        startColors,
        // writeColorContext,

    }

    return <PaletteContext.Provider value={valueData}>
        {props.children}
    </PaletteContext.Provider>
}

