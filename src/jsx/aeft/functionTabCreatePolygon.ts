import {createContent} from './functionCreateContent'
import {butCap} from './functionCap';

export const createPolygonTS = ( param:string, dataCreate:any, patFfx:string) => {
   createContent ( param, dataCreate, patFfx); 
 };

 export const butCapTS = ( param:string, caps:number, nameComp:string) => {
  butCap (param, caps, nameComp);
};

export const roundCapTS = ( param:string, caps:number, nameComp:string) => {
  butCap (param, caps, nameComp); 
};

// export const plusElTS = (startText: string) => {
//    alert (startText)  
//  };

// export const minusElTS = (startText: string) => {
//    alert (startText)  
//  };