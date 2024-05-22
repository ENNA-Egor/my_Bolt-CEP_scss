// const fs = require('fs');
// const path = require('path');
// var csInterface = new CSInterface();
// const pathExt = csInterface.getSystemPath(SystemPath.EXTENSION);
// const presetFile = path.join(pathExt, 'data', 'color_set.tsc');
// const startData = path.join(pathExt, 'data', 'startData.tsc');



// const colorPalette = fs.readFileSync(presetFile, 'utf8');
// let COLORS_PALLETE = JSON.parse(colorPalette)

for (let key in COLORS_PALLETE) {
  let row = document.createElement('tr')
  row.innerHTML = `<th colspan="5"class="head ${key}">${key}</th>`
  document.querySelector('table').append(row)
  for (let key2 in COLORS_PALLETE[key]) {
    let row = document.createElement('tr')
    row.innerHTML = `
           <td colspan="4"class="pod ${key2}">${key2}</td>
           `
    row.addEventListener('click', function (event) {
      let n = this.textContent.trim();
      colorMass(n, event.ctrlKey);
    });
    document.querySelector('table').append(row)
    const table = document.querySelector('table');
    let colCount = 0;
    let currentRow = document.createElement('tr');
    table.append(currentRow);

    for (let n = 0; n < COLORS_PALLETE[key][key2].length; n++) {
      let newCol = document.createElement('td');
      let bgColor = ('#' + COLORS_PALLETE[key][key2][n]);
      newCol.style.backgroundColor = bgColor;
      newCol.classList.add('pallet');

      currentRow.append(newCol);
      colCount++;

      if (colCount == 5) {
        currentRow = document.createElement('tr');
        table.append(currentRow);
        colCount = 0;
      }
    }
  }
}


let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function () {
  const startVal = fs.readFileSync(startData, 'utf8');
  let clrs = JSON.parse(startVal);
  let clr = clrs.start;
  let inputName = document.querySelector('.setName').value;
  if (inputName == "") {
    alert('You must enter a group name.');
    return
  }
  COLORS_PALLETE.Custom[inputName] = clr;
  toPresetDirectory();
});



function colorMass(colorName, ev) {  //получение данных из файла color_set.tsc
  const startVal = fs.readFileSync(startData, 'utf8');
  let color_val = JSON.parse(startVal);
  if (ev == 1) {
    let colorItem = COLORS_PALLETE;
    let c = colorItem.Custom[colorName];
    if (c = colorItem.Default[colorName]) {
      alert("Can't delete default presets");
    }
    delete COLORS_PALLETE.Custom[colorName];
    toPresetDirectory()
  } else {
    let colorItem = COLORS_PALLETE;
    let c = colorItem.Custom[colorName];
    let d = colorItem.Default[colorName];
    if (d == undefined) {
      let newPresetFile =c;
        color_val.start = newPresetFile;
        color_val = JSON.stringify(color_val);
      fs.writeFile(startData, color_val, (err) => {
        if (err) alert(error);
      });
    } else {
      let newPresetFile =d;
        color_val.start = newPresetFile;
        color_val = JSON.stringify(color_val);
      fs.writeFile(startData, color_val, (err) => {
        if (err) alert(error);
      });
    };
  };
};
function toPresetDirectory() {
  let newMassPress = JSON.stringify(COLORS_PALLETE)
  fs.writeFile(presetFile, newMassPress, (err) => {
    if (err) alert(error);
  });
  location.reload();
};
