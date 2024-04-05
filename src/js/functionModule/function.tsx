
import {path, fs} from "../../js/lib/cep/node";

export function hexToRgb(hex){  
   if (typeof hex === 'string') hex = parseInt(hex, 16);  
   var r = (hex >> 16) & 0xFF;  
   var g = (hex >> 8 ) & 0xFF;  
   var b = (hex >> 0 ) & 0xFF;  
   return 'rgb'+ '('+r+',' +g+','+ b +')';  
  }


export function rgbToHex(resultn: string) {

   var resultColor: string[] = resultn.split(',');
     //@ts-ignore
     var r = parseInt(resultColor[0]*255);
      //@ts-ignore
     var g = parseInt(resultColor[1]*255);
      //@ts-ignore
     var b = parseInt(resultColor[2]*255);
   return "0x" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
 }  


  export function writeColorData (colors){

    const saveFolderPath = path.join(__dirname, '/settingsData');
     
    if(!fs.existsSync(saveFolderPath)){
  
       fs.mkdir(saveFolderPath, { recursive: true }, (err) => {
          if (err) {
              console.log('Ошибка при создании папки:', err);
              return;
          } 
      });
    } 
    const colorsHex = rgbToHex (colors);
    const saveFilePath = path.join(__dirname, '/settingsData/colorData_01.json');
    fs.writeFileSync(saveFilePath, JSON.stringify(colorsHex), {encoding: 'utf8', flag: 'w'});
 };


