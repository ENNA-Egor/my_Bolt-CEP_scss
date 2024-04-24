import React, { createContext, useState} from "react";

export const StartContext = createContext();

export  const Context = (props) => {
    const [] = useState([
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

    
}