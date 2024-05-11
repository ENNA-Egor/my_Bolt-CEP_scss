import {createContent} from './functionCreateContent';
import {butCap} from './functionCap';

export const createCircleTS = ( param:string, dataCreate:any,patFfx:string) => {

   createContent ( param, dataCreate, patFfx); 
 };

export const butCapTS = ( param:string, caps:number, nameComp:string) => {
   butCap (param, caps, nameComp);
 };

export const roundCapTS = ( param:string, caps:number, nameComp:string) => {
   butCap (param, caps, nameComp); 
 };

export const plusElTS = (prefComp:string, prefLayer:string) => {
   alert (prefComp)  
   alert (prefLayer)  
 };

export const minusElTS = (prefComp:string, prefLayer:string) => {
   alert (prefComp)  
   alert (prefLayer)    
 };