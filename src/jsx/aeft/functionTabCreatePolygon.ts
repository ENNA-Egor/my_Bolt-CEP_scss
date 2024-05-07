import {createContent} from './functionCreateContent'

export const createPolygonTS = (startText: string, param:string, dataCreate:any,) => {
   alert (startText);  
   alert (dataCreate.colors);  
   alert (param);
   createContent (startText, param, dataCreate); 
 };

// export const butCapTS = (startText: string) => {
//    alert (startText)   
//  };

// export const roundCapTS = (startText: string) => {
//    alert (startText)  
//  };

// export const plusElTS = (startText: string) => {
//    alert (startText)  
//  };

// export const minusElTS = (startText: string) => {
//    alert (startText)  
//  };