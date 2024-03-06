
export const customSettingsTS = (obj: { custom_h: number; custom_w: number; custom_Nam: string; custom_Dur: number; custom_FR: number}) => {
  alert(`ExtendScript received an object: ${JSON.stringify(obj)}`);
                var Custom_w;
                var Custom_h;
                var Custom_Nam;
                var Custom_Dur;
                var Custom_FR;
  var newComp =app.project.activeItem;
            if (newComp){
            if (newComp instanceof CompItem){
                Custom_w=newComp.width;
                alert (typeof Custom_w);
                Custom_h =newComp.height;
                Custom_Nam =newComp.name;
                Custom_Dur =newComp.duration;
                Custom_FR =1/(newComp.frameDuration);
            }
          } else{
            alert('Pleace select composition')
            return obj;
          }

  return {
    custom_h: Custom_h,
    custom_w: Custom_w,
    custom_Nam: Custom_Nam,
    custom_Dur: Custom_Dur,
    custom_FR: Custom_FR
  };
};
