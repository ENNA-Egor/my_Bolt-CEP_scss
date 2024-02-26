// export const example = () => {
// };
import {
  helloVoid,
  helloError,
  helloStr,
  helloNum,
  helloArrayStr,
  customSettingsTS,
} from "./samples";


export { helloError, helloStr, helloNum, helloArrayStr, customSettingsTS, helloVoid };



export const helloWorld = () => {
  alert("Hellooo from After Effects!");
  app.project.activeItem;
};


export const customSettingsComp = () => {
    
            var newComp =app.project.activeItem;
            if (newComp){
            if (newComp instanceof CompItem){
                var Custom_w=newComp.width;
                alert(Custom_w.toString());
                var Custom_h =newComp.height;
                alert(Custom_h.toString());
                var Custom_Nam =newComp.name;
                alert(Custom_Nam);
                var Custom_Dur =newComp.duration;
                alert(Custom_Dur.toString());
                var Custom_FR =newComp.frameDuration;
                alert(Custom_FR.toString());
                // ResW.text = Custom_w;
                // ResH.text = Custom_h;
        // if (checkbox.value==1){Dur.text = Custom_Dur;}
        //         FrRate.text = 1/Custom_FR;
            }
          } else{
            alert('Pleace select composition')
          }
 };