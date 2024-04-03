
import {path, fs} from "../../js/lib/cep/node";

export function hexToRgb(hex){  
   if (typeof hex === 'string') hex = parseInt(hex, 16);  
   var r = (hex >> 16) & 0xFF;  
   var g = (hex >> 8 ) & 0xFF;  
   var b = (hex >> 0 ) & 0xFF;  
   return 'rgb'+ '('+r+',' +g+','+ b +')';  
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
  
    const saveFilePath = path.join(__dirname, '/settingsData/colorData_01.json');
    fs.writeFileSync(saveFilePath, JSON.stringify(colors), {encoding: 'utf8', flag: 'w'});
 };


