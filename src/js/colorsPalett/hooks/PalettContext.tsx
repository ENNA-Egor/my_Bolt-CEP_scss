import React, { createContext, useContext, useState } from "react";
import { writeData } from '../../functionModule/function';

export const PaletteContext = createContext<any>(0);


export const Context = (props) => {
    const [customPalett, setCustomPalett] = useState(
        [
            {
                id: null,
                name: "",
                group: "",
                colors: []
            },
            // {   id: 2,
            //     name:  "Start",
            //     group: "Default",
            //     colors: [ "004358", "1f8a70","bedb39","ffff1a","7f7fff"]
            // },

            // {   id: 3,
            //     name:  "Bright",
            //     group: "Default",
            //     colors:[ "7f44eb","628f2e","92fce3", "ff00ff" ]
            // }, 
            // {   
            //     id: 4,
            //     name:  "Arbitrary",
            //     group: "Custom",
            //     colors: ["2f6b6b","2f5151","104646","6cb7b7","80b7b7","7f7fff","c1faec","ba8db6", "7f44eb","004358","ffff1a","1f8a70","bedb39","ffff1a","7f7fff"]
            // }, 
            // {   id: 5,
            //     name:  "Glow",
            //     group: "Main",
            //     colors:[ "9a9afa", "c9b1f4","91a679"]
            // },
            // {   id: 6,
            //     name:  "Gold",
            //     group: "Custom",
            //     colors:[ "5b82b3", "86cab9","d5e390","fafa98","c1faec"]
            // },
            // {   id: 7,
            //     name:  "New_6",
            //     group: "Main",
            //     colors:[ "d5e390","628f2e","14dcdc","fafa98","1f8a70","bedb39","ffff1a","7f7fff","c1faec","d5e390","628f2e","14dcdc","fafa98","1f8a70","bedb39"]
            // },
            // {   id: 8,
            //     name:  "Start2",
            //     group: "Main",
            //     colors: [ "7f44eb","628f2e","92fce3"]
            // },
            // {   id: 9,
            //     name:  "monocromRed",
            //     group: "Main",
            //     colors:["fbc9c9","fb9797","fb6464", "fb3232","fb0000"]
            // },
            // {   id: 10,
            //     name:  "New",
            //     group: "Main",
            //     colors:[ "5b82b3","86cab9","d5e390","fafa98","fabb86"]
            // }
        ]

    )

    //  const {pathWriteEndRead} = useContext(pathContext);

    //  console.log (pathWriteEndRead);

    const numberIdPallet = (nymberId: number) => { ///Получение индекса элемента массива
        function indexObj(AObj) {
            for (var i = 0; i < customPalett.length; i++) {
                if (customPalett[i].id == AObj.id)
                    return i;
            }
            return -1;
        }
        indexObj({ id: nymberId });
        const arrIndex = indexObj({ id: nymberId });
        // console.log(arrIndex);
        return arrIndex;
    }
    const updatedCustomPalett = [...customPalett];

    const removeGroup = (targetName: number) => { ///Удаление набора
        const indexPal = numberIdPallet(targetName);
        updatedCustomPalett.splice(indexPal, 1);
        // console.log(updatedCustomPalett);
        // alert(updatedCustomPalett);
        setCustomPalett(updatedCustomPalett);

    };
    const appGroupIn = (targetName: number) => { /// Добавление набора в окно колор
        const indexPal = numberIdPallet(targetName);
        // console.log(updatedCustomPalett[indexPal].colors);
        alert(updatedCustomPalett[indexPal].colors);
    };





    const startColors = (stateData) => {
        setCustomPalett(stateData)
        // setCustomPalett((prevState) => {
        //     return {
        // ...prevState,
        // stateData,
        // pathWriteContextColor: '',
        // oldColor: stateData.oldColor,
        // autoFill: stateData.autoFill,
        // num_element: stateData.num_element,
        // resolution_w: stateData.resolution_w,
        // resolution_h: stateData.resolution_h,
        // framerate: stateData.framerate,
        // duration: stateData.duration,
        // influence: stateData.influence,
        // durLock: stateData.durLock,
        // loading: stateData.loading,
        // num_points: stateData.num_points,
        //     };
        // });
    }
    const [pathWriteEndRead, setPathWriteEndRead] = useState(
        {
            pathSettings: '/public/settingsData/colorsPalett.json',
            pathColors: '/public/settingsData/colorsPalett.json',
        }
    )


    const writeColorContext = (newPalett, pathWrite) => {
        writeData(newPalett, pathWrite)
    }

    const valueData = {
        customPalett,
        pathWriteEndRead,
        removeGroup,
        appGroupIn,
        startColors,
        // writeColorContext,

    }
    


    return <PaletteContext.Provider value={valueData}>
        {props.children}
    </PaletteContext.Provider>

}

