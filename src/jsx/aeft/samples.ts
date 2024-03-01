
export const customSettingsTS = (obj: { Custom_h: number; Custom_w: number; Custom_Nam: string; Custom_Dur: number; Custom_FR: number}) => {
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
    Custom_h: Custom_h,
    Custom_w: Custom_w,
    Custom_Nam: Custom_Nam,
    Custom_Dur: Custom_Dur,
    Custom_FR: Custom_FR
  };
};
