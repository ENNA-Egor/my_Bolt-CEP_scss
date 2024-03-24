
export const customSettingsTS = (obj: { custom_h: number; custom_w: number; custom_Nam: string; custom_Dur: number; custom_FR: number}) => {
  alert(`ExtendScript received an object: ${JSON.stringify(obj)}`);
              var Real_w:number=0;
              var Real_h: number = 0;
              var Real_Nam: string = '';
              var Real_Dur: number =0;
              var Real_FR: number =0;

  var newComp =app.project.activeItem;
            if (newComp){
            if (newComp instanceof CompItem){
              Real_w=newComp.width;
              Real_h =newComp.height;
              Real_Nam =newComp.name;
              Real_Dur =newComp.duration;
              Real_FR =1/(newComp.frameDuration);
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
