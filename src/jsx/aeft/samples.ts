
export const customSettingsTS = (obj: { custom_h: number; custom_w: number; custom_Nam: string; custom_Dur: number; custom_FR: number}) => {
  alert(`ExtendScript received an object: ${JSON.stringify(obj)}`);
                var Real_w;
                var Real_h;
                var Real_Nam;
                var Real_Dur;
                var Real_FR;
  var newComp =app.project.activeItem;
            if (newComp){
            if (newComp instanceof CompItem){
                Real_w=newComp.width;
                // alert (typeof Custom_w);
                Real_h =newComp.height;
                Real_Nam =newComp.name;
                Real_Dur =newComp.duration;
                Real_FR =1/(newComp.frameDuration);
            }
          } else{
            alert('Pleace select composition')
             return {
               obj
            //   custom_h : obj.custom_h,
            //   custom_w : obj.custom_w,
            //   custom_Nam : obj.custom_Nam,
            //   custom_Dur : obj.custom_Dur,
            //   custom_FR : obj.custom_FR,
             };
          }

  return {
    // obj:{
      custom_h : Real_h,
      custom_w : Real_w,
      custom_Nam : Real_Nam,
      custom_Dur : Real_Dur,
      custom_FR : Real_FR,
    // },

  };
};
