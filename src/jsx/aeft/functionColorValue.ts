

export const colorValue = (picker_check_value: boolean, picker_path:string, colorStart: string, arrIndex: number)=>{

    if(`${picker_check_value}` === 'true'){
        var externalLibrary = new ExternalObject("lib:"+`${picker_path}`+'/public/ColorPicker/ColorPicker_x64.aex');
        var oldColor = `${colorStart}`;
        //@ts-ignore
         var color = externalLibrary.colorPicker(oldColor, "dialog_title");
         if (color ==-1){
           color =`${colorStart}`;
        }
     } else {
        var color = $.colorPicker(color);
     }
     return color;
}
