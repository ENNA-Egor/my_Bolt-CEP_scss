import { createContent } from './functionCreateContent';
import { butCap } from './functionCap';
import { plusEl, minusEl } from './functionPlusMinus'

export const createCircleTS = (param: string, dataCreate: any, patFfx: string) => {

  createContent(param, dataCreate, patFfx);
};

export const butCapTS = (param: string, caps: number, nameComp: string) => {
  butCap(param, caps, nameComp);
};

export const roundCapTS = (param: string, caps: number, nameComp: string) => {
  butCap(param, caps, nameComp);
};

export const plusElTS = (prefComp: string, prefLayer: string, color: [string]) => {
  plusEl(prefComp, prefLayer, color)
};

export const minusElTS = (prefComp: string, prefLayer: string) => {
  minusEl(prefComp, prefLayer)
};