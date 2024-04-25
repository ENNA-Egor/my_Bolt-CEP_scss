import React, { createContext, useState} from "react";

export const StartContext = createContext<unknown>(0);

export  const Context = (props) => {
    const [customData, setCustomData] = useState([
        {
            "checkColorpicer":true,
            "colors":["5b82b3","86cab9","d5e390","fafa98","fabb86"],
            "oldColor":"dd1dd6",
            "autoFill": false,
            "num_element":5,
            "resolution_w":1920,
            "resolution_h":1080,
            "framerate":25,
            "duration":6,
            "influence":60,
            "durLock":false, 
            "loading": true,
        }
    ]);

        const valueData ={
            customData,
        }

            return <StartContext.Provider value={valueData}>
                {props.children}
            </StartContext.Provider>
    
}