import React, { createContext, useState } from "react";

export const PaletteContext = createContext<any>(0);


export const Context = (props) => {
    const [customPalett, setCustomPalett] = useState(
        {
            "Default":{
                "Standart":["5b82b3","86cab9","d5e390","fafa98","fabb86","9a9afa","c9b1f4","91a679","c1faec","ba8db6"],
                "Бледный":["004358","1f8a70","bedb39","ffff1a","7f7fff"],
                "Яркий":["7f44eb","628f2e","92fce3","ff00ff"],
                "Нейтральный":["2f6b6b","2f5151","104646","6cb7b7","80b7b7","7f7fff","c1faec","ba8db6","7f44eb","004358","ffff1a","1f8a70","bedb39","ffff1a","7f7fff"]
            } ,
            "Custom":{
                "Glow":["9a9afa","c9b1f4","91a679"],
                "Золотой":["5b82b3","86cab9","d5e390","fafa98","c1faec"],
                "Новый 6":["d5e390","628f2e","14dcdc","fafa98","1f8a70","bedb39","ffff1a","7f7fff","c1faec","d5e390","628f2e","14dcdc","fafa98","1f8a70","bedb39"],
                "Start":["7f44eb","628f2e","92fce3"],
                "monocromRed":["fbc9c9","fb9797","fb6464","fb3232","fb0000"],
                "Новый":["5b82b3","86cab9","d5e390","fafa98","fabb86"]
            }
        }
    )

    const valueData = {
        customPalett,

    }

    return <PaletteContext.Provider value={valueData}>
        {props.children}
    </PaletteContext.Provider>
}
