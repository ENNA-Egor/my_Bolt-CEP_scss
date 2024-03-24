
export const customSettingsTS = (obj: { custom_h: number; custom_w: number; custom_Nam: string; custom_Dur: number; custom_FR: number}) => {
  alert(`ExtendScript received an object: ${JSON.stringify(obj)}`);

  var newComp =app.project.activeItem;
            if (newComp){
            if (newComp instanceof CompItem){
              var Real_w:number=newComp.width;
              var Real_h: number =newComp.height;
              var Real_Nam: string =newComp.name;
              var Real_Dur: number =newComp.duration;
              var Real_FR: number =1/(newComp.frameDuration);
            }
          } else{
            alert('Pleace select composition')
             return obj;
          }

  return { 
      custom_h : Real_h,
      custom_w : Real_w,
      custom_Nam : Real_Nam,
      custom_Dur : Real_Dur,
      custom_FR : Real_FR,
      };
};
