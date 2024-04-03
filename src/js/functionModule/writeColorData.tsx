import {path, fs} from "../../js/lib/cep/node";

function writeColorData (colors){

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

      export default writeColorData;