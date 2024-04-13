
export const customSettingsTS = (obj: { custom_h: number; custom_w: number; custom_Nam: string; custom_Dur: number; custom_FR: number, lockDurations: boolean}) => {
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
              if(`${obj.lockDurations}`=== 'false') {
                Real_Dur =newComp.duration
              }else {
                Real_Dur = +`${obj.custom_Dur}`;
              };             
              Real_FR =1/(newComp.frameDuration);
            }
          } else{
            alert('Pleace select composition')
             return {
              custom_h : 1080, 
              custom_w : 1920,
              custom_Nam : 'newComp',
              custom_Dur : 6,
              custom_FR : 25,
             }
          }

  return { 
      custom_h : Real_h, 
      custom_w : Real_w,
      custom_Nam : Real_Nam,
      custom_Dur : Real_Dur,
      custom_FR : Real_FR,
      };
};
