import {createContent} from './functionCreateContent';
import {butCap} from './functionCap';

export const createCircleTS = (startText: string, param:string, dataCreate:any,patFfx:string) => {

   createContent (startText, param, dataCreate, patFfx); 
 };

export const butCapTS = (startText: string, param:string, caps:number) => {
   butCap (param, caps);
 };

export const roundCapTS = (startText: string, param:string, caps:number) => {
   butCap (param, caps); 
 };

export const plusElTS = (startText: string) => {
   alert (startText)  
 };

export const minusElTS = (startText: string) => {
   alert (startText)  
 };