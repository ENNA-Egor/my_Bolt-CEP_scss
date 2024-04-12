
import { error } from "console";
import {path, fs} from "../../js/lib/cep/node";

export function hexToRgb(hex){  
   if (typeof hex === 'string') hex = parseInt(hex, 16);  
   let r = (hex >> 16) & 0xFF;  
   let g = (hex >> 8 ) & 0xFF;  
   let b = (hex >> 0 ) & 0xFF;  
   return 'rgb'+ '('+r+',' +g+','+ b +')';  
  }


export function rgbToHex(resultn: string) {
      let lengMass = resultn.length;
      let newColorArray:string[]= []
      for(let i =0; i<lengMass; i++){
         let leng = resultn[i].length;
         let sliseResulth = resultn[i].slice(4,(leng-1));
         let resultColor = sliseResulth.split(','); 
         let r = parseInt(resultColor[0]);
         let g = parseInt(resultColor[1]);
         let b = parseInt(resultColor[2]);
         let colorOne = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
         newColorArray.push(colorOne);
      }
      return newColorArray;
     }



  export function writeData (res, pathWrite){

    const saveFolderPath = path.join(__dirname, '/settingsData');
     
    if(!fs.existsSync(saveFolderPath)){
  
       fs.mkdir(saveFolderPath, { recursive: true }, (err) => {
          if (err) {
              console.log('Ошибка при создании папки:', err);
              return;
          } 
      });
    } 
   //  const colorsHex = rgbToHex (colors);
    const saveFilePath = path.join(__dirname, pathWrite);
    fs.writeFileSync(saveFilePath, JSON.stringify(res), {encoding: 'utf8', flag: 'w'});
 };


  export function readColorData (){
    const readFilePath = path.join(__dirname, '/public/settingsData/customSettigsData_01.json');
    const data =fs.readFileSync(readFilePath, 'utf8');
    alert (data);
    const newData = JSON.parse(data);
    alert (typeof(newData));
    alert (newData.Settings.resolution_w);
    alert (newData.oldColor);
    alert (newData.colorStart);
 };


